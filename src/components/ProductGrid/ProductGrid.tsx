import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';
import classes from './ProductGrid.module.scss';
import useAxios, { FetchMethod } from '../../hooks/useAxios';
import { ProductItem as ProductItemData } from '../../store/types';

const DEFAULT_PAGE_LIMIT = 12;
const DEFAULT_SORT_BY = 'createdAt';
const DEFAULT_SORT_ORDER = 'desc';

const ProductGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState<ProductItemData[]>([]);
  const [loadedPage, setLoadedPage] = useState<number | null>(null);
  

  const { response, loading, fetchData } = useAxios<ProductItemData[]>({
    baseUrl: 'https://64876d13beba62972790a0da.mockapi.io/api/v1/products',
    // url: `https://64876d13beba62972790a0da.mockapi.io/api/v1/products?sortBy=${SORT_BY}&order=${SORT_ORDER}&page=${currentPage}&limit=${limitProductsOnPage}`,
  });

  useEffect(() => {
    const fetchParams = {
      method: FetchMethod.GET,
      params: {
        sortBy: DEFAULT_SORT_BY,
        order: DEFAULT_SORT_ORDER,
        page: currentPage,
        limit: DEFAULT_PAGE_LIMIT,
      }
    }

    fetchData(fetchParams);
  }, [currentPage, fetchData]);

  useEffect(() => {
    if (Array.isArray(response) && currentPage !== loadedPage) {
      setLoadedProducts([...loadedProducts, ...response]);
      setLoadedPage(currentPage);
      setIsLastPage(response.length < DEFAULT_PAGE_LIMIT);
    }
  }, [response, loadedPage]);

  const handlerLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container maxWidth='xl'>
      <div className={classes.products}>
        {loading && 'loading'}
        <Grid container spacing={3} mb={5}>
          {loadedProducts.map((product, index) => (
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
