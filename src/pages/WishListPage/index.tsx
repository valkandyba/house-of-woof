import React from 'react';
import Layout from '../../components/Layout/Layout/Layout';
import SectionCaption from '../../components/SectionCaption/SectionCaption';
import imgCaption from '../../assets/wish_list_img.jpeg';
import { Container } from '@mui/material';
// import WishListTable from '../../components/WishListTable/WishListTable';

const WishListPage: React.FC = () => {
  // const data = [
  //   { name: 'What is Lorem Ipsum', img: imgGoods, qty: 1, price: 50 },
  //   { name: '2 What is Lorem Ipsum', img: imgGoods, qty: 1, price: 150 },
  // ];

  return (
    <Layout>
      <SectionCaption
        title='Your Wish List'
        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
        img={imgCaption}
      />
      <Container maxWidth='md'>{/*<WishListTable rows={data} />*/}</Container>
    </Layout>
  );
};

export default WishListPage;
