import { Box, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ContactInfo } from "../../types/types";
import { publicPath } from "../../constants/gloabals";
import { motionize, transitions } from "../motion";

type FloatingActionButtonsProps = {
  data: ContactInfo[];
};

/**
 * Glass dock rather than loose circles.
 *
 * The row layout used on small screens spanned the viewport and sat on top of
 * body copy; a single narrow column stays clear of the text at every width.
 */
const Dock = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: theme.spacing(1.5),
  bottom: theme.spacing(3),
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.75),
  padding: theme.spacing(0.75),
  borderRadius: 999,
  border: "1px solid var(--border-subtle)",
  background: "rgba(10,15,24,0.72)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
  [theme.breakpoints.up("md")]: {
    right: theme.spacing(2.5),
    // Auto margins centre the dock without a transform, which framer-motion
    // owns on this element for the entrance animation.
    top: 0,
    bottom: 0,
    height: "fit-content",
    marginTop: "auto",
    marginBottom: "auto",
  },
  "@media print": {
    display: "none",
  },
}));

const MotionDock = motionize(Dock);

const DockLink = styled("a")(() => ({
  width: 34,
  height: 34,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid transparent",
  transition: "background-color 0.2s ease, border-color 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(34,211,238,0.14)",
    borderColor: "rgba(34,211,238,0.45)",
  },
  "& img": {
    width: 17,
    height: 17,
    objectFit: "contain",
  },
}));

const MotionDockLink = motionize(DockLink);

const FloatingActionButtons = ({ data }: FloatingActionButtonsProps) => {
  if (!data?.length) return null;

  return (
    <MotionDock
      className='floating-buttons'
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...transitions.enter, delay: 0.6 }}>
      {data.map((item, index) => (
        <Tooltip key={`${item.title}-${index}`} title={item.title} placement='left' arrow>
          <MotionDockLink
            className='floating-button'
            href={item.url}
            target='_blank'
            rel='noreferrer'
            aria-label={item.title}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            transition={transitions.spring}>
            <img
              src={`${publicPath}/images/icons/${item.icon}`}
              alt=''
              aria-hidden
              loading='lazy'
            />
          </MotionDockLink>
        </Tooltip>
      ))}
    </MotionDock>
  );
};

export default FloatingActionButtons;
