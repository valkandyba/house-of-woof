import * as React from 'react';
import { Grid } from '@mui/material';
import WishListItem from './WishListItem/WishListItem';

interface WishListProps {
  favoriteItems: FavoriteItem[];
}

interface FavoriteItem {
  id: string;
  name: string;
  img: string;
  price: number;
}

const WishList: React.FC<WishListProps> = ({ favoriteItems }) => {
  return (
    <Grid container spacing={3}>
      {favoriteItems.map(wishListItem => (
        <Grid item xs={12} sm={6} md={3} key={wishListItem.id}>
          <WishListItem
            id={wishListItem.id}
            name={wishListItem.name}
            price={wishListItem.price}
            img={wishListItem.img}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WishList;
