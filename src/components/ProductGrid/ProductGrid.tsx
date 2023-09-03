import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';
import classes from './ProductGrid.module.scss';
import useAxios from '../../hooks/useAxios';
import { CartItem } from '../../store/types';

const ProductGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const limitProductsOnPage = 12;

  const [loadedProducts, setLoadedProducts] = useState<CartItem[]>([]);

  const { response, loading } = useAxios({
    url: `https://64876d13beba62972790a0da.mockapi.io/api/v1/products?page=${currentPage}&limit=${limitProductsOnPage}`,
    method: 'get',
  });

  useEffect(() => {
    if (Array.isArray(response)) {
      setLoadedProducts([...loadedProducts, ...response]);
      // @ts-ignore
      setIsLastPage(response.length < limitProductsOnPage);
    }
  }, [response]);

  const handlerLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container maxWidth='xl'>
      <div className={classes.products}>
        {loading && 'loading'}
        <Grid container spacing={3} mb={5}>
          {loadedProducts.map((product: CartItem, index: number) => (
            <Grid item xs={12} sm={6} md={3} key={product.id + index}>
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
