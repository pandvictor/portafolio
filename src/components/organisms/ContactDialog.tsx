import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { memo } from "react";
import { ContactInfo } from "../../types/types";
import i18n from "../../utils/i18n";
import { ContactIcon } from "../atoms";
import { motionize, transitions } from "../motion";

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
  contacts: ContactInfo[];
};

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    borderRadius: 24,
    background:
      "linear-gradient(150deg, rgba(19,29,48,0.98) 0%, rgba(9,14,23,0.99) 100%)",
    border: "1px solid rgba(34,211,238,0.24)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
  },
}));

const Options = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(1.5),
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
}));

const Option = styled("a")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(2.5),
  borderRadius: 18,
  border: "1px solid var(--border-subtle)",
  background: "rgba(15,23,42,0.6)",
  textDecoration: "none",
  color: "inherit",
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    borderColor: "rgba(34,211,238,0.5)",
    backgroundColor: "rgba(23,35,58,0.9)",
  },
}));

const MotionOption = motionize(Option);

const OptionHead = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
}));

const IconBadge = styled(Box)(() => ({
  width: 40,
  height: 40,
  borderRadius: 12,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(10,15,24,0.8)",
  flexShrink: 0,
}));

const Arrow = styled(ArrowForwardRoundedIcon)(() => ({
  marginLeft: "auto",
  fontSize: 20,
  color: "var(--text-secondary)",
}));

const OptionValue = styled(Typography)(() => ({
  color: "var(--accent-1)",
  fontWeight: 600,
  wordBreak: "break-all",
}));

/**
 * The CTA used to be a bare `mailto:` link, which looks like a dead button on
 * any machine without a mail client configured. Asking first gives every
 * visitor a route that actually opens.
 */
export const ContactDialog = memo(({ open, onClose, contacts }: ContactDialogProps) => {
  // Read fresh on every render: memoising would freeze the copy in whichever
  // language happened to be active when the dialog first mounted.
  const copy = i18n.t("contact_dialog") as {
    title: string;
    desc: string;
    email: string;
    email_desc: string;
    whatsapp: string;
    whatsapp_desc: string;
  };

  const email = contacts.find((item) => item.url?.startsWith("mailto:"));
  const whatsapp = contacts.find((item) => item.icon === "whatsapp.svg");
  const phone = contacts.find((item) => item.url?.startsWith("tel:"));
  // The WhatsApp entry is titled "WhatsApp"; showing the number it dials is
  // more useful than repeating the channel name under its own heading.
  const whatsappNumber =
    phone?.title ??
    (whatsapp?.url?.includes("wa.me/")
      ? `+${whatsapp.url.split("wa.me/")[1].replace(/\D/g, "")}`
      : whatsapp?.title);

  const options = [
    email && {
      key: "email",
      icon: "email.svg",
      label: copy.email,
      desc: copy.email_desc,
      value: email.title,
      href: email.url,
      external: false,
    },
    whatsapp && {
      key: "whatsapp",
      icon: "whatsapp.svg",
      label: copy.whatsapp,
      desc: copy.whatsapp_desc,
      value: whatsappNumber ?? whatsapp.title,
      href: whatsapp.url,
      external: true,
    },
  ].filter(Boolean) as {
    key: string;
    icon: string;
    label: string;
    desc: string;
    value: string;
    href: string;
    external: boolean;
  }[];

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='h5'>{copy.title}</Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mt: 0.5 }}>
              {copy.desc}
            </Typography>
          </Box>
          <IconButton aria-label={i18n.t("contact_dialog.close")} onClick={onClose} size='small'>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ pb: 3 }}>
        <Options>
          {options.map((option, idx) => (
            <MotionOption
              key={option.key}
              href={option.href}
              onClick={onClose}
              {...(option.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitions.base, delay: 0.05 + idx * 0.07 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}>
              <OptionHead>
                <IconBadge>
                  <ContactIcon icon={option.icon} size={20} />
                </IconBadge>
                <Typography variant='subtitle1' fontWeight={800}>
                  {option.label}
                </Typography>
                <Arrow />
              </OptionHead>
              <Typography variant='body2' color='text.secondary'>
                {option.desc}
              </Typography>
              <OptionValue variant='body2'>{option.value}</OptionValue>
            </MotionOption>
          ))}
        </Options>
      </DialogContent>
    </StyledDialog>
  );
});

ContactDialog.displayName = "ContactDialog";
