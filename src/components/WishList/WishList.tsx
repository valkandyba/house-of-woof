import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import FavoriteContext from '../../store/Favorite/favorite-context';
import WishListItem from './WishListItem/WishListItem';
import { CartItem } from '../../store/types';

interface WishListProps {
  favoriteItems: CartItem[];
}

const WishList: React.FC<WishListProps> = () => {
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <Grid container spacing={3} mb={5}>
      {favoriteItems.map(wishListItem => (
        <Grid item xs={12} sm={6} md={3} key={wishListItem.id}>
          <WishListItem favoriteItem={wishListItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WishList;
