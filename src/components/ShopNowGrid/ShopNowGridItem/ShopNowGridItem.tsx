import React, {ReactNode} from 'react';
import {Grid} from "@mui/material";
import {ShopNowGridItemProps} from './types';


const ShopNowGridItem: React.FC<ShopNowGridItemProps> = ({children}) => {
    return (
        <Grid xs={12} sm={6} md={4} lg={3}>{children}</Grid>
    );
};

export default ShopNowGridItem;
