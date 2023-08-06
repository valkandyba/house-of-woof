import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';
import classes from './ProductGrid.module.scss';
import useAxios from '../../hooks/useAxios';
import { CartItem } from '../../store/types';

const ProductGrid: React.FC = () => {
  const { response, loading } = useAxios({
    url: 'https://64876d13beba62972790a0da.mockapi.io/api/v1/products?page=1&limit=10',
    method: 'get',
  });

  const products: CartItem[] = Array.isArray(response) ? response : [];

  return (
    <Container maxWidth='xl'>
      <div className={classes.products}>
        {loading && 'loading'}
        <Grid container spacing={3}>
          {products.map((product: CartItem) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductItem {...product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default ProductGrid;
