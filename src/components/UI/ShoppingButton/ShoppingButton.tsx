import React, { useState } from 'react';
import { IconButton, Input } from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import classes from './ShoppingButton.module.scss';

const ShoppingButton = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  const handleDeleteClick = () => {
    setQuantity(0);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  if (!isAdded) {
    return (
      <IconButton
        className={classes['quantity-button']}
        color='primary'
        onClick={handleAddClick}
      >
        <Add />
      </IconButton>
    );
  }

  return (
    <div className={classes['input-number']}>
      {quantity > 1 ? (
        <IconButton
          className={`${classes.button} ${classes.minus}`}
          color='primary'
          onClick={handleDecrement}
        >
          <Remove />
        </IconButton>
      ) : (
        <IconButton
          className={`${classes.button} ${classes.minus}`}
          color='primary'
          onClick={handleDeleteClick}
        >
          <Delete />
        </IconButton>
      )}
      <Input
        className={classes.input}
        type='number'
        value={quantity}
        onChange={e => setQuantity(parseInt(e.target.value))}
      />
      <IconButton
        className={`${classes.button} ${classes.add}`}
        color='primary'
        onClick={handleIncrement}
      >
        <Add />
      </IconButton>
    </div>
  );
};

export default ShoppingButton;
