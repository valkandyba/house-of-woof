import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import ModalWindow from '../UI/ModalWindow/ModalWindow';
import AddProductImg from '../../assets/contact-form-img.png';
import classes from './AddProductDialog.module.scss';

interface AddProductDialogProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  title?: string;
  image?: string;
  description?: string;
  price?: string;
}

const AddProductDialog: React.FC<AddProductDialogProps> = ({
  open,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    image: '',
    description: '',
    price: '',
  });

  const { title, image, description, price } = formData;

  const handleFormFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendForm = () => {
    const data = new FormData();
    data.append('title', title as string);
    data.append('image', image as string);
    data.append('description', description as string);
    data.append('price', price as string);

    fetch('https://64876d13beba62972790a0da.mockapi.io/api/v1/products', {
      method: 'post',
      body: data,
    });
    onClose();
  };

  return (
    <ModalWindow
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <Typography
        variant={'h4'}
        component='h2'
        textAlign='center'
        mb={2}
        fontWeight='bold'
      >
        Add new product
      </Typography>
      <img className={classes.img} src={AddProductImg} alt='img' />
      <form>
        <div className={classes.row}>
          <TextField
            type='text'
            name='image'
            value={image}
            onChange={handleFormFieldChange}
            label='Enter product img url'
            variant='standard'
            fullWidth
            required
          />
        </div>
        <div className={classes.row}>
          <TextField
            type='text'
            name='title'
            value={title}
            onChange={handleFormFieldChange}
            label='Enter product title'
            variant='standard'
            fullWidth
            required
          />
        </div>
        <div className={classes.row}>
          <TextField
            type='text'
            name='description'
            value={description}
            onChange={handleFormFieldChange}
            label='Enter product description'
            variant='standard'
            fullWidth
            required
          />
        </div>
        <div className={classes.row}>
          <TextField
            type='text'
            name='price'
            value={price}
            onChange={handleFormFieldChange}
            label='Enter product price'
            variant='standard'
            fullWidth
            required
          />
        </div>
        <div className='submit-row '>
          <Button onClick={handleSendForm} variant='contained' size='large'>
            Submit
          </Button>
        </div>
      </form>
    </ModalWindow>
  );
};

export default AddProductDialog;
