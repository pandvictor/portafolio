import { ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";
import i18n from "../../utils/i18n";
import { ContactInfo } from "../../types";
import { LinkItem } from "../atoms";

type ResumeContactSectionProps = {
  contacts: ContactInfo[];
};

export const ResumeContactSection = memo(
  ({ contacts }: ResumeContactSectionProps) => (
    <section style={{ marginBottom: "5em" }}>
      <Typography variant='h5'>{i18n.t("resume.contact")}</Typography>
      <hr />
      <Stack direction='column' spacing={1}>
        {contacts.map((item, index) => (
          <ListItem key={index} component='div' disablePadding>
            <LinkItem to={item.url}>{item.title}</LinkItem>
          </ListItem>
        ))}
      </Stack>
    </section>
  )
);

ResumeContactSection.displayName = "ResumeContactSection";
