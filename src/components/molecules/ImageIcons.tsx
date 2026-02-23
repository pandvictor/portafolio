import React from 'react';
import { ImageListItem, ImageListItemBar } from '@mui/material';

interface ImageIconsProps {
  image: {
    src: string;
    srcSet: string;
    alt: string;
  };
  actionIcons: React.ReactNode;
}

export const ImageIcons: React.FC<ImageIconsProps> = ({ image, actionIcons }) => {
  return (
    <ImageListItem
      sx={{
        m: 1,
        p: 0,
        position: 'relative',
        pt: '56.25%', // 16:9 ratio
        overflow: 'hidden',
        borderRadius: '18px',
        background:
          'linear-gradient(180deg, rgba(15,23,42,0.7), rgba(8,12,20,0.9))',
        border: '1px solid var(--border-subtle)',
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
          objectFit: 'contain',
          objectPosition: 'center',
          display: 'block',
          padding: '12px',
        }}
      />
      <ImageListItemBar
        sx={{
          background: 'transparent',
          borderRadius: '28px'
        }}
        position="top"
        actionIcon={actionIcons}
        actionPosition="right"
      />
    </ImageListItem>
  );
};
