import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Logo from '../../UI/Logo/Logo';
import { AppRoutes } from '../../../constants';
import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer id='footer' className={classes.footer}>
      <Container maxWidth='lg'>
        <Box className={classes['footer-wrap']}>
          <Logo imgWidth={40} route={AppRoutes.HOME_PAGE} />
          <Typography className={classes.copyright} component='span'>
            &copy; Copyright House of woof. All Rights Reserved
          </Typography>
          <Button variant='text' color='inherit'>
            Contact us
          </Button>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
