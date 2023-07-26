import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import FavoriteContext from '../../../store/Favorite/favorite-context';
import { CartItem } from '../../../store/types';
import ShoppingButton from '../../UI/ShoppingButton/ShoppingButton';
import classes from './WishListItem.module.scss';
import './WishListItem.module.scss';

type ProductItemProps = Omit<CartItem, 'amount'>;

const WishListItem: React.FC<ProductItemProps> = ({ id, name, img, price }) => {
  const { favoriteItems, handleRemoveFavoriteItem } =
    useContext(FavoriteContext);

  const handleAddClick = () => {};

  const handleDeleteClick = () => {};

  const handleIncrementClick = () => {};

  const handleDecrementClick = () => {};

  const handleRemoveFromFavorite = () => {
    const isAlreadyAdded = favoriteItems.some(
      favoriteItem => favoriteItem.id === id,
    );

    if (isAlreadyAdded) {
      handleRemoveFavoriteItem(id);
    }
  };
  return (
    <div className={classes['wish-list-item']}>
      <img src={img} alt={name} className={classes['wish-list-img']} />
      <span className={classes['wish-list-name']}>{name}</span>
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
          onClick={handleRemoveFromFavorite}
        >
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default WishListItem;
