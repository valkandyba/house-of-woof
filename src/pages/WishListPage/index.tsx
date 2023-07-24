import React from 'react';
import Layout from '../../components/Layout/Layout/Layout';
import SectionCaption from '../../components/SectionCaption/SectionCaption';
import imgCaption from '../../assets/wish_list_img.jpeg';
import imgGoods from '../../assets/goods/goods_7.jpeg';
import { Container } from '@mui/material';
import WishList from '../../components/WishList/WishList';

const WishListPage: React.FC = () => {
  const data = [
    { id: '1', name: 'What is Lorem Ipsum', img: imgGoods, price: 50 },
    { id: '2', name: '2 What is Lorem Ipsum', img: imgGoods, price: 150 },
  ];

  return (
    <Layout>
      <SectionCaption
        title='Your Wish List'
        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
        img={imgCaption}
      />
      <Container maxWidth='lg'>{<WishList rows={data} />}</Container>
    </Layout>
  );
};

export default WishListPage;
