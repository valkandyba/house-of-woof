import * as React from 'react';
import classes from './WishList.module.scss';
import WishListItem from './WishListItem/WishListItem';
import './WishList.module.scss';

interface WishTableProps {
  rows: Row[];
}

interface Row {
  id: string;
  name: string;
  img: string;
  price: number;
}

const WishList: React.FC<WishTableProps> = ({ rows }) => {
  return (
    <ul className={classes['wish-list']}>
      {rows.map(wishListItem => (
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
