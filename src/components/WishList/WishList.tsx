import * as React from 'react';
import classes from './WishList.module.scss';
import WishListItem from './WishListItem/WishListItem';
import './WishList.module.scss';

interface WishTableProps {
  favoriteItems: FavoriteItem[];
}

interface FavoriteItem {
  id: string;
  name: string;
  img: string;
  price: number;
}

const WishList: React.FC<WishTableProps> = ({ favoriteItems }) => {
  return (
    <ul className={classes['wish-list']}>
      {favoriteItems.map(wishListItem => (
        <WishListItem
          id={wishListItem.id}
          key={wishListItem.id}
          name={wishListItem.name}
          price={wishListItem.price}
          img={wishListItem.img}
        />
      ))}
    </ul>
  );
};

export default WishList;
