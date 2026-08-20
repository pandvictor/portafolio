import { ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";
import i18n from "../../utils/i18n";
import { ContactInfo } from "../../types";
import { LinkItem } from "../atoms";

type ResumeContactSectionProps = {
  contacts: ContactInfo[];
};

/**
 * "LinkedIn" alone is a dead end once the page is on paper, so each web link
 * carries a shortened address that only the print stylesheet renders.
 */
const printableUrl = (url?: string) => {
  if (!url || !/^https?:/i.test(url)) return undefined;
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/$/, "");
    return `${parsed.host.replace(/^www\./, "")}${path}`;
  } catch {
    return undefined;
  }
};

export const ResumeContactSection = memo(
  ({ contacts }: ResumeContactSectionProps) => (
    <section className='resume-contact' style={{ marginBottom: "5em" }}>
      <Typography variant='h5'>{i18n.t("resume.contact")}</Typography>
      <hr />
      <Stack direction='column' spacing={1}>
        {contacts.map((item, index) => (
          <ListItem key={index} component='div' disablePadding>
            <LinkItem to={item.url} data-print-url={printableUrl(item.url)}>
              {item.title}
            </LinkItem>
          </ListItem>
        ))}
      </Stack>
    </section>
  )
);

ResumeContactSection.displayName = "ResumeContactSection";
