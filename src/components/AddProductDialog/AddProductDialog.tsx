import React, { useState } from 'react';
import ModalWindow from '../UI/ModalWindow/ModalWindow';

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
  };

  return (
    <ModalWindow
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <form>
        <div className='form-row'>
          <input
            type='text'
            name='image'
            defaultValue={image}
            onChange={handleFormFieldChange}
          />
        </div>
        <div className='form-row'>
          <input
            type='text'
            name='title'
            defaultValue={title}
            onChange={handleFormFieldChange}
          />
        </div>
        <div className='form-row'>
          <input
            type='text'
            name='description'
            defaultValue={description}
            onChange={handleFormFieldChange}
          />
        </div>
        <div className='form-row'>
          <input
            type='text'
            name='price'
            defaultValue={price}
            onChange={handleFormFieldChange}
          />
        </div>
        <div className='form-row'>
          <button onClick={handleSendForm}>Submit</button>
        </div>
      </form>
    </ModalWindow>
  );
};

export default AddProductDialog;
