import React, { useState } from 'react';
import ContactFormImg from '../../assets/contact-form-img.png';
import { Button, TextField, Typography } from '@mui/material';
import classes from './ContactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Tel:', tel);
  };

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
      <form onSubmit={handleSubmit}>
        <div className={classes.row}>
          <TextField
            fullWidth
            id='name'
            label='Enter your name'
            variant='standard'
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            required
          />
        </div>
        <div className={classes.row}>
          <TextField
            fullWidth
            id='email'
            label='Enter your email'
            variant='standard'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />
        </div>
        <div className={classes.row}>
          <TextField
            fullWidth
            id='tel'
            label='Enter your tel'
            variant='standard'
            value={tel}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTel(e.target.value)
            }
            required
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
