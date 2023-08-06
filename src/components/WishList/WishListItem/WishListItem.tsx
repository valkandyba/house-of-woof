import React from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { CartItem } from '../../../store/types';
import './WishListItem.module.scss';
import classes from './WishListItem.module.scss';
import ShoppingButton from '../../UI/ShoppingButton/ShoppingButton';

type ProductItemProps = Omit<CartItem, 'amount' | 'description'>;

const WishListItem: React.FC<ProductItemProps> = ({
  id,
  title,
  image,
  price,
}) => {
  const handleAddClick = () => {};

  const handleDeleteClick = () => {};

  const handleIncrementClick = () => {};

  const handleDecrementClick = () => {};
  return (
    <div className={classes['wish-list-item']}>
      <img src={image} alt={title} className={classes['wish-list-img']} />
      <span className={classes['wish-list-name']}>{title}</span>
      <span className={classes['wish-list-price']}>{price} $</span>
      <div className={classes['wish-list-item-actions']}>
        <ShoppingButton
          isAdded={false}
          quantity={0}
          onAddClick={handleAddClick}
          onDeleteClick={handleDeleteClick}
          onIncrementClick={handleIncrementClick}
          onDecrementClick={handleDecrementClick}
        />
        <IconButton
          className={`${classes.button} ${classes.minus}`}
          color='primary'
        >
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default WishListItem;
