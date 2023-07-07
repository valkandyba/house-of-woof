import React from 'react';
import { IconButton, Input } from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import classes from './ShoppingButton.module.scss';

type ShoppingButtonProps = {
  isAdded: boolean;
  quantity: number;
  onAddClick: () => void;
  onDeleteClick: () => void;
  onIncrementClick: () => void;
  onDecrementClick: () => void;
};

const ShoppingButton: React.FC<ShoppingButtonProps> = ({
  isAdded,
  quantity,
  onAddClick,
  onDeleteClick,
  onIncrementClick,
  onDecrementClick,
}) => {
  if (!isAdded && quantity < 1) {
    return (
      <IconButton
        className={classes['quantity-button']}
        color='primary'
        onClick={onAddClick}
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
          onClick={onDecrementClick}
        >
          <Remove />
        </IconButton>
      ) : (
        <IconButton
          className={`${classes.button} ${classes.minus}`}
          color='primary'
          onClick={onDeleteClick}
        >
          <Delete />
        </IconButton>
      )}
      <Input
        className={classes.input}
        type='number'
        value={quantity}
        readOnly
      />
      <IconButton
        className={`${classes.button} ${classes.add}`}
        color='primary'
        onClick={onIncrementClick}
      >
        <Add />
      </IconButton>
    </div>
  );
};

export default ShoppingButton;
