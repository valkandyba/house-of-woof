import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Logo from '../../UI/Logo/Logo';
import ContactForm from '../../ContactForm/ContactForm';
import ModalWindow from '../../UI/ModalWindow/ModalWindow';
import { AppRoutes } from '../../../constants';
import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <footer id='footer' className={classes.footer}>
      <Container maxWidth='lg'>
        <Box className={classes['footer-wrap']}>
          <Logo imgWidth={40} route={AppRoutes.HOME_PAGE} />
          <Typography className={classes.copyright} component='span'>
            &copy; Copyright House of woof. All Rights Reserved
          </Typography>
          <div>
            <Button variant='text' color='inherit' onClick={handleModalOpen}>
              Contact us
            </Button>
            {isModalOpen && (
              <ModalWindow open={isModalOpen} onClose={handleModalClose}>
                <ContactForm onClose={handleModalClose} />
              </ModalWindow>
            )}
          </div>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
