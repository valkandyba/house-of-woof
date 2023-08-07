import React, { useContext } from 'react';
import { Container } from '@mui/material';
import FavoriteContext from '../../store/Favorite/favorite-context';
import Layout from '../../components/Layout/Layout/Layout';
import SectionCaption from '../../components/SectionCaption/SectionCaption';
import WishList from '../../components/WishList/WishList';
import imgCaption from '../../assets/wish_list_img.jpeg';

const WishListPage: React.FC = () => {
  const { favoriteItems } = useContext(FavoriteContext);

  return (
    <Layout>
      <SectionCaption
        title='Your Wish List'
        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
        img={imgCaption}
      />
      <Container maxWidth='lg'>
        <WishList favoriteItems={favoriteItems} />
      </Container>
    </Layout>
  );
};

export default WishListPage;
