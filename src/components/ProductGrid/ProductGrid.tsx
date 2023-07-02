import React from 'react';
import { Grid } from "@mui/material";

const ProductGrid: React.FC = () => {
    return (
        <Grid container spacing={2} >
            <Grid xs={12} sm={6} md={4} />
            <Grid xs={12} sm={6} md={4} />
            <Grid xs={12} sm={6} md={4} />
            <Grid xs={12} sm={6} md={4} />
        </Grid>
    );
};

export default ProductGrid;
