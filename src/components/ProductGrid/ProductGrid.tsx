import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';
import DUMMY_GOODS from '../../store/goods';
import classes from './ProductGrid.module.scss';
import img from '../../assets/goods/goods_7.jpeg';

const ProductGrid: React.FC = () => {
  return (
    <Container maxWidth='xl'>
      <div className={classes.products}>
        <Grid container spacing={3}>
          {DUMMY_GOODS.map(product => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductItem
                img={img}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default ProductGrid;
