import { Avatar, Chip, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { publicPath } from "../../constants/gloabals";
import i18n from "../../utils/i18n";
import { resolveTechIcon } from "../../utils/techIcons";
import { TechSkill } from "../../types";
import { Stars } from "../atoms";

type ResumeSkillsSectionProps = {
  skills: TechSkill[];
};

export const ResumeSkillsSection = memo(({ skills }: ResumeSkillsSectionProps) => (
  <section style={{ marginBottom: "5em" }}>
    <Typography variant='h5'>{i18n.t("resume.skills")}</Typography>
    <hr />
    {skills.map((item, index) => (
      <section key={index} style={{ marginBottom: 30 }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          {item.title}
          <Stars count={item.stars} />
        </Typography>
        <Stack
          direction='row'
          spacing={1}
          flexWrap='wrap'
          alignItems='center'
          sx={{ columnGap: 1, rowGap: 1 }}>
          {item.tools.map((tool, idx) => {
            const icon = resolveTechIcon(tool);
            return (
              <Chip
                key={`${tool}-${idx}`}
                label={tool}
                avatar={
                  <Avatar
                    src={`${publicPath}/images/icons/${icon}`}
                    alt={tool}
                    sx={{ width: 22, height: 22 }}
                  />
                }
                sx={{ borderRadius: 2 }}
              />
            );
          })}
        </Stack>
      </section>
    ))}
  </section>
));

ResumeSkillsSection.displayName = "ResumeSkillsSection";
