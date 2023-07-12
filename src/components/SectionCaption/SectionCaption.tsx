import React from 'react';
import { Container, Typography } from '@mui/material';
import classes from './SectionCaption.module.scss';

type SectionCaptionProps = {
  title: string;
  text?: string;
  img?: string;
};

const SectionCaption: React.FC<SectionCaptionProps> = ({
  title,
  text,
  img,
}) => {
  return (
    <div className={classes.caption}>
      <Container maxWidth='md'>
        <Typography fontWeight={'bold'} variant='h3' component='h2'>
          {title}
        </Typography>
        {text && (
          <Typography lineHeight={1} variant='body1' component='p'>
            {text}
          </Typography>
        )}
        {img && (
          <img className={classes['caption-img']} src={img} alt='image' />
        )}
      </Container>
    </div>
  );
};

export default SectionCaption;
