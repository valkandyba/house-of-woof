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
  title,
  image,
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
  const { handleAddFavoriteItem, checkIsFavoriteItemAdded } =
    useContext(FavoriteContext);

  const handleAddClick = () => {
    handleAddItem({ id, title, image, description, price, amount: 1 });
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
    const isAlreadyAdded = checkIsFavoriteItemAdded(id);

    if (!isAlreadyAdded) {
      handleAddFavoriteItem({ id, name, img, description, price, amount: 1 });
    }
  };

  return (
    <Card className={classes.product}>
      <CardMedia component='img' alt={title} height='140' image={image} />
      <CardContent className={classes['product-content']}>
        <Typography gutterBottom variant='h5' component='h5'>
          {title}
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
          {checkIsFavoriteItemAdded(id) ? <FavoriteIcon /> : <FavoriteBorder />}
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
