import React from 'react';
import { ImageListItem, ImageListItemBar } from '@mui/material';

export interface ImagePresentation {
  fit?: "contain" | "cover";
  padding?: number | string;
  blendMode?: "normal" | "multiply" | "screen" | "overlay";
  scale?: number;
}

interface ImageIconsProps {
  image: {
    src: string;
    srcSet: string;
    alt: string;
  };
  actionIcons: React.ReactNode;
  presentation?: ImagePresentation;
}

export const ImageIcons: React.FC<ImageIconsProps> = ({
  image,
  actionIcons,
  presentation,
}) => {
  const fit = presentation?.fit ?? "contain";
  const padding = presentation?.padding ?? "12px";
  const blendMode = presentation?.blendMode ?? "normal";
  const scale = presentation?.scale ?? 1;

  return (
    <ImageListItem
      sx={{
        m: 1,
        p: 0,
        position: 'relative',
        pt: '56.25%', // 16:9 ratio
        overflow: 'hidden',
        borderRadius: '18px',
        isolation: 'isolate',
        background:
          'linear-gradient(180deg, rgba(15,23,42,0.7), rgba(8,12,20,0.9))',
        border: '1px solid var(--border-subtle)',
        "&::before": {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(18px) brightness(0.55) saturate(1.1)',
          transform: 'scale(1.08)',
          opacity: 0.5,
          zIndex: 0,
        },
      }}>
      <img
        src={image.src}
        srcSet={image.srcSet}
        alt={image.alt}
        loading="lazy"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: fit,
          objectPosition: 'center',
          display: 'block',
          padding,
          mixBlendMode: blendMode,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          zIndex: 1,
        }}
      />
      <ImageListItemBar
        sx={{
          background: 'transparent',
          borderRadius: '28px',
          zIndex: 2,
        }}
        position="top"
        actionIcon={actionIcons}
        actionPosition="right"
      />
    </ImageListItem>
  );
};
