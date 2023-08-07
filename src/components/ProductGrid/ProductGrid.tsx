import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';
import classes from './ProductGrid.module.scss';
import useAxios from '../../hooks/useAxios';
import { CartItem } from '../../store/types';

const ProductGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { response, loading } = useAxios({
    url: `https://64876d13beba62972790a0da.mockapi.io/api/v1/products?page=${currentPage}&limit=12`,
    method: 'get',
  });

  const handlerLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const products: CartItem[] = Array.isArray(response) ? response : [];

  return (
    <Container maxWidth='xl'>
      <div className={classes.products}>
        {loading && 'loading'}
        <Grid container spacing={3} mb={5}>
          {products.map((product: CartItem) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductItem {...product} />
            </Grid>
          ))}
        </Grid>
        {response && (
          <div className={classes['btn-holder']}>
            <Button size='large' variant='contained' onClick={handlerLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductGrid;
