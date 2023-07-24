import React, { useContext } from 'react';
import { Container } from '@mui/material';
import Layout from '../../components/Layout/Layout/Layout';
import SectionCaption from '../../components/SectionCaption/SectionCaption';
import OrderTable from '../../components/OrderTable/OrderTable';
import imgCaption from '../../assets/order_list_img.png';
import CartContext from '../../store/Cart/cart-context';

const OrderPage: React.FC = () => {
  const { items } = useContext(CartContext);

  return (
    <Layout>
      <SectionCaption
        title='Your order'
        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
        img={imgCaption}
      />
      <Container maxWidth='md'>{<OrderTable orderItems={items} />}</Container>
    </Layout>
  );
};

export default OrderPage;
