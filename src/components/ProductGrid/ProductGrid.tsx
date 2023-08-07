import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';
import classes from './ProductGrid.module.scss';
import useAxios from '../../hooks/useAxios';
import { CartItem } from '../../store/types';

const ProductGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  const { response, loading } = useAxios({
    url: `https://64876d13beba62972790a0da.mockapi.io/api/v1/products?page=${currentPage}&limit=12`,
    method: 'get',
  });
  const products: CartItem[] = Array.isArray(response) ? response : [];

  useEffect(() => {
    if (Array.isArray(products)) {
      setIsLastPage(products.length < 12);
    }
  }, [products]);

  const handlerLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

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
        {!isLastPage && (
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
