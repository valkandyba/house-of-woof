import React from 'react';
import { Container } from '@mui/material';
import Layout from '../../components/Layout/Layout/Layout';
import SectionCaption from '../../components/SectionCaption/SectionCaption';
import OrderTable from '../../components/OrderTable/OrderTable';
import imgGoods from '../../assets/goods/goods_7.jpeg';
import imgCaption from '../../assets/order_list_img.png';

const OrderPage: React.FC = () => {
  const data = [
    { name: 'What is Lorem Ipsum', img: imgGoods, qty: 1, price: 50 },
    { name: '2 What is Lorem Ipsum', img: imgGoods, qty: 1, price: 150 },
  ];

  return (
    <Layout>
      <SectionCaption
        title='Your order'
        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
        img={imgCaption}
      />
      <Container maxWidth='md'>{<OrderTable orderItems={data} />}</Container>
    </Layout>
  );
};

export default OrderPage;
