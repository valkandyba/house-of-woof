import React from 'react';
import ContactFormImg from '../../assets/contact-form-img.png';
import { Button, TextField, Typography } from '@mui/material';
import classes from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div>
      <Typography
        variant={'h4'}
        component='h2'
        textAlign='center'
        mb={2}
        fontWeight='bold'
      >
        Contact Us!
      </Typography>
      <img className={classes.img} src={ContactFormImg} alt='img' />
      <form action='#'>
        <div className={classes.row}>
          <TextField
            fullWidth
            id='standard-basic'
            label='Enter your name'
            variant='standard'
          />
        </div>
        <div className={classes.row}>
          <TextField
            fullWidth
            id='standard-basic'
            label='Enter your email'
            variant='standard'
          />
        </div>
        <div className={classes.row}>
          <TextField
            fullWidth
            id='standard-basic'
            label='Enter your tel'
            variant='standard'
          />
        </div>
        <div className={classes['submit-row']}>
          <Button type='submit' variant='contained' size='large'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
