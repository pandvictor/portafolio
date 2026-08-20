/**
 * Helpers for rendering resume copy that carries its own inline formatting.
 *
 * A few `description` fields in the translation data were authored as bullet
 * lists ("• one\n• two") rather than prose. Rendered as a paragraph they turn
 * into a run-on sentence with stray bullet characters, so they are split back
 * into real list items at display time instead of editing the source data.
 */

const BULLET_PREFIX = /^[•·*-]\s*/;

export type ParsedDescription = {
  /** Leading prose, if the field is not purely a list. */
  lead?: string;
  /** List items found in the field. */
  bullets: string[];
};

export const parseDescription = (description?: string): ParsedDescription => {
  if (!description) return { bullets: [] };

  const normalized = description.replace(/\s*•\s*/g, "\n• ").trim();
  if (!normalized.includes("\n")) return { lead: description.trim(), bullets: [] };

  const lines = normalized
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const lead: string[] = [];
  const bullets: string[] = [];
  for (const line of lines) {
    if (BULLET_PREFIX.test(line)) bullets.push(line.replace(BULLET_PREFIX, "").trim());
    else if (bullets.length === 0) lead.push(line);
    else bullets.push(line);
  }

  return { lead: lead.join(" ") || undefined, bullets };
};

/** Loose comparison so near-identical duplicates collapse too. */
const fingerprint = (value?: string) =>
  (value ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/**
 * Some roles repeat their whole description inside an achievement entry.
 * Printing both says the same thing twice under one job.
 */
export const isDuplicateText = (a?: string, b?: string) => {
  const left = fingerprint(a);
  const right = fingerprint(b);
  return left.length > 0 && left === right;
};
