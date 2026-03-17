from __future__ import annotations

import json
import re
import struct
import textwrap
import zlib
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Tuple


ROOT = Path(__file__).resolve().parents[1]
TRANSLATIONS_DIR = ROOT / "src/assets/translations"
OUTPUT_DIR = ROOT / "public/assets/files"
FONT_REGULAR = Path("/System/Library/Fonts/Supplemental/Arial.ttf")
FONT_BOLD = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")


@dataclass(frozen=True)
class TextLine:
    text: str
    font_key: str
    size: int
    x: int
    y: int


class PdfBuilder:
    def __init__(self) -> None:
        self.objects: List[bytes] = []

    def add(self, body: bytes | str) -> int:
        if isinstance(body, str):
            body = body.encode("latin-1")
        self.objects.append(body)
        return len(self.objects)

    def set(self, object_id: int, body: bytes | str) -> None:
        if isinstance(body, str):
            body = body.encode("latin-1")
        self.objects[object_id - 1] = body

    def add_stream(self, content: bytes, extra: str = "") -> int:
        compressed = zlib.compress(content)
        header = f"<< /Length {len(compressed)} /Filter /FlateDecode {extra}>>\nstream\n".encode(
            "latin-1"
        )
        return self.add(header + compressed + b"\nendstream")

    def build(self, root_id: int) -> bytes:
        pdf = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        offsets = [0]

        for index, body in enumerate(self.objects, start=1):
            offsets.append(len(pdf))
            pdf.extend(f"{index} 0 obj\n".encode("latin-1"))
            pdf.extend(body)
            pdf.extend(b"\nendobj\n")

        xref_pos = len(pdf)
        pdf.extend(f"xref\n0 {len(self.objects) + 1}\n".encode("latin-1"))
        pdf.extend(b"0000000000 65535 f \n")
        for offset in offsets[1:]:
            pdf.extend(f"{offset:010d} 00000 n \n".encode("latin-1"))

        pdf.extend(
            f"trailer\n<< /Size {len(self.objects) + 1} /Root {root_id} 0 R >>\nstartxref\n{xref_pos}\n%%EOF".encode(
                "latin-1"
            )
        )
        return bytes(pdf)


class TrueTypeFont:
    def __init__(self, path: Path) -> None:
        self.path = path
        self.data = path.read_bytes()
        self.tables = self._parse_tables()
        self.units_per_em, self.bbox = self._parse_head()
        self.ascender, self.descender, self.number_of_h_metrics = self._parse_hhea()
        self.num_glyphs = self._parse_maxp()
        self.advance_widths = self._parse_hmtx()
        self.cmap = self._parse_cmap()
        self.postscript_name = self._parse_postscript_name()

    def _table_slice(self, tag: str) -> bytes:
        offset, length = self.tables[tag]
        return self.data[offset : offset + length]

    def _parse_tables(self) -> Dict[str, Tuple[int, int]]:
        _, num_tables, _, _, _ = struct.unpack(">IHHHH", self.data[:12])
        tables: Dict[str, Tuple[int, int]] = {}
        for idx in range(num_tables):
            start = 12 + idx * 16
            tag, _, offset, length = struct.unpack(">4sIII", self.data[start : start + 16])
            tables[tag.decode("ascii")] = (offset, length)
        return tables

    def _parse_head(self) -> Tuple[int, Tuple[int, int, int, int]]:
        head = self._table_slice("head")
        units_per_em = struct.unpack(">H", head[18:20])[0]
        x_min, y_min, x_max, y_max = struct.unpack(">hhhh", head[36:44])
        return units_per_em, (x_min, y_min, x_max, y_max)

    def _parse_hhea(self) -> Tuple[int, int, int]:
        hhea = self._table_slice("hhea")
        ascender, descender = struct.unpack(">hh", hhea[4:8])
        number_of_h_metrics = struct.unpack(">H", hhea[34:36])[0]
        return ascender, descender, number_of_h_metrics

    def _parse_maxp(self) -> int:
        maxp = self._table_slice("maxp")
        return struct.unpack(">H", maxp[4:6])[0]

    def _parse_hmtx(self) -> List[int]:
        hmtx = self._table_slice("hmtx")
        widths: List[int] = []
        last_advance = 0

        for idx in range(self.number_of_h_metrics):
            advance, _ = struct.unpack(">HH", hmtx[idx * 4 : idx * 4 + 4])
            widths.append(advance)
            last_advance = advance

        while len(widths) < self.num_glyphs:
            widths.append(last_advance)
        return widths

    def _parse_postscript_name(self) -> str:
        name = self._table_slice("name")
        count = struct.unpack(">H", name[2:4])[0]
        string_offset = struct.unpack(">H", name[4:6])[0]
        for idx in range(count):
            entry = name[6 + idx * 12 : 18 + idx * 12]
            platform_id, _, _, name_id, length, offset = struct.unpack(">HHHHHH", entry)
            if name_id != 6:
                continue
            raw = name[string_offset + offset : string_offset + offset + length]
            if platform_id in (0, 3):
                try:
                    return raw.decode("utf-16-be").replace(" ", "")
                except UnicodeDecodeError:
                    continue
            try:
                return raw.decode("latin-1").replace(" ", "")
            except UnicodeDecodeError:
                continue
        return re.sub(r"[^A-Za-z0-9]", "", self.path.stem) or "CustomFont"

    def _parse_cmap(self) -> Dict[int, int]:
        cmap = self._table_slice("cmap")
        _, num_tables = struct.unpack(">HH", cmap[:4])
        subtables: List[Tuple[int, int, int]] = []
        for idx in range(num_tables):
            start = 4 + idx * 8
            platform_id, encoding_id, offset = struct.unpack(">HHI", cmap[start : start + 8])
            subtables.append((platform_id, encoding_id, offset))

        for platform_id, encoding_id, offset in subtables:
            fmt = struct.unpack(">H", cmap[offset : offset + 2])[0]
            if platform_id == 3 and encoding_id == 10 and fmt == 12:
                return self._parse_cmap_format12(cmap, offset)

        for platform_id, encoding_id, offset in subtables:
            fmt = struct.unpack(">H", cmap[offset : offset + 2])[0]
            if platform_id == 3 and encoding_id in (1, 0) and fmt == 4:
                return self._parse_cmap_format4(cmap, offset)

        raise RuntimeError(f"No supported cmap found in {self.path}")

    def _parse_cmap_format12(self, cmap: bytes, offset: int) -> Dict[int, int]:
        _, _, _, _, num_groups = struct.unpack(">HHLLL", cmap[offset : offset + 16])
        mapping: Dict[int, int] = {}
        pos = offset + 16
        for _ in range(num_groups):
            start_char, end_char, start_glyph = struct.unpack(">LLL", cmap[pos : pos + 12])
            pos += 12
            for codepoint in range(start_char, end_char + 1):
                mapping[codepoint] = start_glyph + (codepoint - start_char)
        return mapping

    def _parse_cmap_format4(self, cmap: bytes, offset: int) -> Dict[int, int]:
        seg_count = struct.unpack(">H", cmap[offset + 6 : offset + 8])[0] // 2
        pos = offset + 14
        end_codes = struct.unpack(f">{seg_count}H", cmap[pos : pos + seg_count * 2])
        pos += seg_count * 2
        pos += 2
        start_codes = struct.unpack(f">{seg_count}H", cmap[pos : pos + seg_count * 2])
        pos += seg_count * 2
        id_deltas = struct.unpack(f">{seg_count}h", cmap[pos : pos + seg_count * 2])
        pos += seg_count * 2
        id_range_offset_pos = pos
        id_range_offsets = struct.unpack(f">{seg_count}H", cmap[pos : pos + seg_count * 2])

        mapping: Dict[int, int] = {}
        for seg_index in range(seg_count):
            start_code = start_codes[seg_index]
            end_code = end_codes[seg_index]
            if start_code == 0xFFFF and end_code == 0xFFFF:
                continue
            for codepoint in range(start_code, end_code + 1):
                range_offset = id_range_offsets[seg_index]
                if range_offset == 0:
                    glyph_id = (codepoint + id_deltas[seg_index]) & 0xFFFF
                else:
                    offset_within = (
                        id_range_offset_pos
                        + seg_index * 2
                        + range_offset
                        + (codepoint - start_code) * 2
                    )
                    glyph_id = struct.unpack(">H", cmap[offset_within : offset_within + 2])[0]
                    if glyph_id != 0:
                        glyph_id = (glyph_id + id_deltas[seg_index]) & 0xFFFF
                if glyph_id != 0:
                    mapping[codepoint] = glyph_id
        return mapping

    def glyph_id(self, char: str) -> int:
        return self.cmap.get(ord(char), 0)

    def glyph_width(self, char: str) -> int:
        glyph_id = self.glyph_id(char)
        if glyph_id >= len(self.advance_widths):
            return self.advance_widths[0]
        return self.advance_widths[glyph_id]

    def pdf_width(self, char: str) -> int:
        return round(self.glyph_width(char) * 1000 / self.units_per_em)


def build_cover_letter_lines(lang: str) -> List[TextLine]:
    data = json.loads((TRANSLATIONS_DIR / f"{lang}.json").read_text(encoding="utf-8"))
    cover = data["cover_letter"]
    resume = data["resume"]
    contacts = [item["title"] for item in resume["contact_info"][:3]]

    cursor_y = 760
    lines: List[TextLine] = []

    def push(text: str, font_key: str, size: int, gap: int | None = None, x: int = 72) -> None:
      nonlocal cursor_y
      if text:
          lines.append(TextLine(text=text, font_key=font_key, size=size, x=x, y=cursor_y))
      cursor_y -= gap if gap is not None else max(15, int(size * 1.55))

    def push_paragraph(text: str) -> None:
      for chunk in textwrap.wrap(
          text,
          width=82,
          break_long_words=False,
          break_on_hyphens=False,
      ):
          push(chunk, "regular", 11)
      push("", "regular", 11, gap=8)

    push(cover["title"], "bold", 26, gap=38)
    push(resume["full_name"], "bold", 18, gap=30)
    push(resume["position"], "regular", 12, gap=20)
    push(cover["location"], "regular", 11, gap=18)
    push(" | ".join(contacts), "regular", 11, gap=28)

    for section in cover["sections"]:
        push(section["title"].upper(), "bold", 12, gap=24)
        for paragraph in section.get("paragraphs", []):
            push_paragraph(paragraph)
        for bullet in section.get("bullets", []):
            wrapped = textwrap.wrap(
                bullet,
                width=76,
                break_long_words=False,
                break_on_hyphens=False,
            )
            for idx, chunk in enumerate(wrapped):
                prefix = "• " if idx == 0 else "  "
                push(prefix + chunk, "regular", 11, x=90)
            push("", "regular", 11, gap=8)
        push("", "regular", 11, gap=10)

    push(cover["closing_title"], "bold", 12, gap=24)
    for chunk in textwrap.wrap(
        cover["closing"],
        width=82,
        break_long_words=False,
        break_on_hyphens=False,
    ):
        push(chunk, "regular", 11)

    push("", "regular", 11, gap=20)
    for chunk in textwrap.wrap(
        cover["footer_note"],
        width=84,
        break_long_words=False,
        break_on_hyphens=False,
    ):
        push(chunk, "regular", 10, x=110)
    return lines


def chars_for_font(lines: Iterable[TextLine], font_key: str) -> List[int]:
    chars = {ord(char) for line in lines if line.font_key == font_key for char in line.text}
    chars.add(ord(" "))
    return sorted(chars)


def encode_pdf_hex(text: str) -> str:
    return "".join(f"{ord(char):04X}" for char in text)


def build_widths_array(font: TrueTypeFont, codepoints: List[int]) -> str:
    groups: List[List[int]] = []
    current: List[int] = []
    previous = None
    for codepoint in codepoints:
        if previous is None or codepoint == previous + 1:
            current.append(codepoint)
        else:
            groups.append(current)
            current = [codepoint]
        previous = codepoint
    if current:
        groups.append(current)

    parts: List[str] = []
    for group in groups:
        widths = " ".join(str(font.pdf_width(chr(codepoint))) for codepoint in group)
        parts.append(f"{group[0]} [{widths}]")
    return "[ " + " ".join(parts) + " ]"


def build_cid_to_gid_map(font: TrueTypeFont, codepoints: List[int]) -> bytes:
    max_cid = max(codepoints)
    mapping = bytearray((max_cid + 1) * 2)
    for codepoint in codepoints:
        glyph_id = font.glyph_id(chr(codepoint))
        struct.pack_into(">H", mapping, codepoint * 2, glyph_id)
    return bytes(mapping)


def build_to_unicode_cmap(codepoints: List[int]) -> bytes:
    lines = [
        "/CIDInit /ProcSet findresource begin",
        "12 dict begin",
        "begincmap",
        "/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def",
        "/CMapName /Adobe-Identity-UCS def",
        "/CMapType 2 def",
        "1 begincodespacerange",
        "<0000> <FFFF>",
        "endcodespacerange",
    ]

    chunk_size = 100
    for idx in range(0, len(codepoints), chunk_size):
        chunk = codepoints[idx : idx + chunk_size]
        lines.append(f"{len(chunk)} beginbfchar")
        for codepoint in chunk:
            lines.append(f"<{codepoint:04X}> <{codepoint:04X}>")
        lines.append("endbfchar")

    lines.extend(
        [
            "endcmap",
            "CMapName currentdict /CMap defineresource pop",
            "end",
            "end",
        ]
    )
    return "\n".join(lines).encode("ascii")


def add_font_resource(
    pdf: PdfBuilder,
    resource_name: str,
    font: TrueTypeFont,
    codepoints: List[int],
) -> int:
    font_stream_id = pdf.add_stream(
        font.data, extra=f"/Length1 {len(font.data)} "
    )

    x_min, y_min, x_max, y_max = font.bbox
    descriptor_id = pdf.add(
        (
            f"<< /Type /FontDescriptor /FontName /{font.postscript_name} "
            f"/Flags 32 /FontBBox [{x_min} {y_min} {x_max} {y_max}] "
            f"/ItalicAngle 0 /Ascent {font.ascender} /Descent {font.descender} "
            f"/CapHeight {font.ascender} /StemV 80 /FontFile2 {font_stream_id} 0 R >>"
        )
    )

    cid_to_gid_id = pdf.add_stream(build_cid_to_gid_map(font, codepoints))
    to_unicode_id = pdf.add_stream(build_to_unicode_cmap(codepoints))
    widths = build_widths_array(font, codepoints)

    descendant_id = pdf.add(
        (
            f"<< /Type /Font /Subtype /CIDFontType2 /BaseFont /{font.postscript_name} "
            f"/CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> "
            f"/FontDescriptor {descriptor_id} 0 R /DW 1000 /W {widths} "
            f"/CIDToGIDMap {cid_to_gid_id} 0 R >>"
        )
    )

    return pdf.add(
        (
            f"<< /Type /Font /Subtype /Type0 /BaseFont /{font.postscript_name} "
            f"/Encoding /Identity-H /DescendantFonts [{descendant_id} 0 R] "
            f"/ToUnicode {to_unicode_id} 0 R >>"
        )
    )


def build_content_stream(lines: List[TextLine]) -> bytes:
    commands = []
    for line in lines:
        font_ref = "F1" if line.font_key == "regular" else "F2"
        commands.append(
            f"BT /{font_ref} {line.size} Tf 1 0 0 1 {line.x} {line.y} Tm <{encode_pdf_hex(line.text)}> Tj ET"
        )
    return "\n".join(commands).encode("ascii")


def render_cover_letter_pdf(lang: str) -> None:
    regular_font = TrueTypeFont(FONT_REGULAR)
    bold_font = TrueTypeFont(FONT_BOLD)
    lines = build_cover_letter_lines(lang)

    regular_codepoints = chars_for_font(lines, "regular")
    bold_codepoints = chars_for_font(lines, "bold")

    pdf = PdfBuilder()
    catalog_id = pdf.add(b"")
    pages_id = pdf.add(b"")

    regular_font_id = add_font_resource(pdf, "F1", regular_font, regular_codepoints)
    bold_font_id = add_font_resource(pdf, "F2", bold_font, bold_codepoints)

    content_id = pdf.add_stream(build_content_stream(lines))
    page_id = pdf.add(b"")

    pdf.set(
        pages_id,
        f"<< /Type /Pages /Kids [{page_id} 0 R] /Count 1 >>",
    )
    pdf.set(
        page_id,
        (
            f"<< /Type /Page /Parent {pages_id} 0 R /MediaBox [0 0 612 792] "
            f"/Resources << /Font << /F1 {regular_font_id} 0 R /F2 {bold_font_id} 0 R >> >> "
            f"/Contents {content_id} 0 R >>"
        ),
    )
    pdf.set(catalog_id, f"<< /Type /Catalog /Pages {pages_id} 0 R >>")

    out_path = OUTPUT_DIR / f"cover-letter-victor-hernandez-{lang}.pdf"
    out_path.write_bytes(pdf.build(catalog_id))


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for lang in ("en", "es"):
        render_cover_letter_pdf(lang)


if __name__ == "__main__":
    main()
