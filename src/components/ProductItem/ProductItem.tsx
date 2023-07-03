import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingButton from '../UI/ShoppingButton/ShoppingButton';
import { StoreItem } from '../../store/types';
import classes from './ProductItem.module.scss';

type ProductItemProps = Omit<StoreItem, 'id'>;

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  img,
  description,
  price,
}) => {
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
        <IconButton aria-label='add to favorites' color='primary'>
          <FavoriteIcon />
        </IconButton>
        <ShoppingButton />
      </CardActions>
    </Card>
  );
};

export default ProductItem;
