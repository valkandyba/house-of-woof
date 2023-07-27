import React, { useContext } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CartContext from '../../store/Cart/cart-context';
import ShoppingButton from '../UI/ShoppingButton/ShoppingButton';
import { CartItem } from '../../store/types';
import classes from './ProductItem.module.scss';
import FavoriteContext from '../../store/Favorite/favorite-context';
import { FavoriteBorder } from '@mui/icons-material';

type ProductItemProps = Omit<CartItem, 'amount'>;

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  name,
  img,
  description,
  price,
}) => {
  const {
    handleAddItem,
    handleIncrementItem,
    handleDecrementItem,
    handleRemoveItem,
    checkIsAddedItem,
    getItemQuantity,
  } = useContext(CartContext);
  const { handleAddFavoriteItem, favoriteItems, checkIsAddedFavoriteItem } =
    useContext(FavoriteContext);

  // const isAdded = items.some(item => item.id === id);
  // const quantity = items.find(item => item.id === id)?.amount;

  const handleAddClick = () => {
    handleAddItem({ id, name, img, description, price, amount: 1 });
  };

  const handleDeleteClick = () => {
    handleRemoveItem(id);
  };

  const handleIncrementClick = () => {
    handleIncrementItem(id);
  };

  const handleDecrementClick = () => {
    handleDecrementItem(id);
  };

  const handleAddToFavorite = () => {
    const isAlreadyAdded = favoriteItems.some(
      favoriteItem => favoriteItem.id === id,
    );

    if (!isAlreadyAdded) {
      handleAddFavoriteItem({ id, name, img, description, price, amount: 1 });
    }
  };

  return (
    <Card className={classes.product}>
      <CardMedia component='img' alt={name} height='140' image={img} />
      <CardContent className={classes['product-content']}>
        <Typography gutterBottom variant='h5' component='h5'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='h5'>{price}$</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          aria-label='add to favorites'
          color='primary'
          onClick={handleAddToFavorite}
        >
          {checkIsAddedFavoriteItem(id) ? <FavoriteIcon /> : <FavoriteBorder />}
        </IconButton>
        <ShoppingButton
          isAdded={checkIsAddedItem(id)}
          quantity={getItemQuantity(id)}
          onAddClick={handleAddClick}
          onDeleteClick={handleDeleteClick}
          onIncrementClick={handleIncrementClick}
          onDecrementClick={handleDecrementClick}
        />
      </CardActions>
    </Card>
  );
};

export default ProductItem;
