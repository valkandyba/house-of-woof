import React from 'react';
import { Typography } from '@mui/material';
import LogoImg from '../../../assets/logo-house-of-woof.svg';
import classes from './Logo.module.scss';

type LogoProps = {
  imgWidth: number;
};

const Logo: React.FC<LogoProps> = ({ imgWidth }) => {
  return (
    <div>
      <a className={classes['logo-link']} href='#'>
        <img
          style={{ width: imgWidth + 'px' }}
          className={classes['logo-img']}
          src={LogoImg}
          alt='Logo'
        />
        <Typography
          className={classes['logo-text']}
          lineHeight={1}
          fontWeight={'bold'}
          variant='h6'
          component='span'
        >
          House <br /> of <br /> Woof!
        </Typography>
      </a>
    </div>
  );
};

export default Logo;
