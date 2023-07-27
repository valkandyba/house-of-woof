import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import FavoriteContext from '../../../store/Favorite/favorite-context';
import { FavoriteItem } from '../../../store/types';
import ShoppingButton from '../../UI/ShoppingButton/ShoppingButton';
import classes from './WishListItem.module.scss';
import './WishListItem.module.scss';
import CartContext from '../../../store/Cart/cart-context';

interface ProductItemProps {
  favoriteItem: FavoriteItem;
}

const WishListItem: React.FC<ProductItemProps> = ({ favoriteItem }) => {
  const { favoriteItems, handleRemoveFavoriteItem } =
    useContext(FavoriteContext);
  const {
    handleAddItem,
    handleRemoveItem,
    handleIncrementItem,
    handleDecrementItem,
    checkIsAddedItem,
    getItemQuantity,
  } = useContext(CartContext);

  const handleAddClick = () => {
    handleAddItem({ ...favoriteItem, amount: 1 });
  };

  const handleDeleteClick = () => {
    handleRemoveItem(favoriteItem.id);
  };

  const handleIncrementClick = () => {
    handleIncrementItem(favoriteItem.id);
  };

  const handleDecrementClick = () => {
    handleDecrementItem(favoriteItem.id);
  };

  const handleRemoveFromFavorite = () => {
    const isAlreadyAdded = favoriteItems.some(
      item => item.id === favoriteItem.id,
    );

    if (isAlreadyAdded) {
      handleRemoveFavoriteItem(favoriteItem.id);
    }
  };

  return (
    <div className={classes['wish-list-item']}>
      <img
        src={favoriteItem.img}
        alt={favoriteItem.name}
        className={classes['wish-list-img']}
      />
      <span className={classes['wish-list-name']}>{favoriteItem.name}</span>
      <span className={classes['wish-list-price']}>{favoriteItem.price} $</span>
      <div className={classes['wish-list-item-actions']}>
        <ShoppingButton
          isAdded={checkIsAddedItem(favoriteItem.id)}
          quantity={getItemQuantity(favoriteItem.id)}
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
