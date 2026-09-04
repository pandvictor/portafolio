import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { Certification } from "../../types";
import { StaggerGroup, StaggerItem } from "../motion";

type ResumeCertificationsSectionProps = {
  title: string;
  certifications: Certification[];
};

const Entry = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

const Meta = styled(Typography)(() => ({
  color: "var(--text-secondary)",
}));

export const ResumeCertificationsSection = memo(
  ({ title, certifications }: ResumeCertificationsSectionProps) => {
    if (!certifications?.length) return null;
    return (
      <section style={{ marginBottom: "5em" }}>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <hr />
        <StaggerGroup stagger={0.06}>
          {certifications.map((item, index) => (
            <StaggerItem key={index}>
              <Entry>
                <Typography variant='subtitle1' component='h3' fontWeight={700}>
                  {item.title}
                </Typography>
                <Meta variant='body2'>
                  {item.issuer} · {item.year}
                </Meta>
              </Entry>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    );
  }
);

ResumeCertificationsSection.displayName = "ResumeCertificationsSection";
