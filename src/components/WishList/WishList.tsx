import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import FavoriteContext from '../../store/Favorite/favorite-context';
import WishListItem from './WishListItem/WishListItem';
import { CartItem } from '../../store/types';

interface WishListProps {
  favoriteItems: CartItem[];
}

const WishList: React.FC<WishListProps> = () => {
  const {
    handleAddFavoriteItem,
    handleIncrementFavoriteItem,
    handleRemoveFavoriteItem,
    handleDecrementFavoriteItem,
    favoriteItems,
  } = useContext(FavoriteContext);

  return (
    <Grid container spacing={3}>
      {favoriteItems.map(wishListItem => (
        <Grid item xs={12} sm={6} md={3} key={wishListItem.id}>
          <WishListItem
            id={wishListItem.id}
            name={wishListItem.name}
            price={wishListItem.price}
            img={wishListItem.img}
            description={wishListItem.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WishList;
