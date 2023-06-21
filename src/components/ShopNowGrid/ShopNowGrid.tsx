import React from 'react';
import { Grid } from "@mui/material";
import ShopNowGridItem from './ShopNowGridItem/ShopNowGridItem';
import {ShopNowGridItemProps} from "./ShopNowGridItem/types";

type ShopNowGridProps = {
    gridItems: ShopNowGridItemProps[];
};

const ShopNowGrid: React.FC<ShopNowGridProps> = ({gridItems}) => {
    return (
        <Grid container spacing={2} key={gridItems.length}>
            {gridItems.map((item) => (
                <ShopNowGridItem key={item.id} {...item} />
            ))}
        </Grid>
    );
};

export default ShopNowGrid;
