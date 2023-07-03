import React from 'react';
import { Grid, Container } from "@mui/material";
import ProductItem from "../ProductItem/ProductItem";
import DUMMY_GOODS from '../../store/goods'
import img from '../../assets/goods/goods_2.jpeg'

const ProductGrid: React.FC = () => {
    return (
        <Container maxWidth="xl">
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
        </Container>
    );
};

export default ProductGrid;
