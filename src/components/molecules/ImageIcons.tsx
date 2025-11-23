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
    <ImageListItem sx={{padding: 1}}>
      <img
        src={image.src}
        srcSet={image.srcSet}
        alt={image.alt}
        loading="lazy"
        style={{ borderRadius: '18px', width: '100%', height: '280px'}}
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
