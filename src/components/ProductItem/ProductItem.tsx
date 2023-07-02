import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { StoreItem }  from '../../store/types'
import ShoppingButton from "../UI/ShoppingButton/ShoppingButton";

const ProductItem: React.FC<StoreItem> = ({id, name, img, description, price}) => {
    return (
        <Card sx={{maxWidth: 345, my: 2, mx: 2}}>
            <CardMedia
                key={id}
                component="img"
                alt={name}
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">{name}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
                <Typography variant="body2">{price}</Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                <IconButton aria-label="add to favorites" color="primary">
                    <FavoriteIcon/>
                </IconButton>
                <ShoppingButton/>
            </CardActions>
        </Card>
    );
}

export default ProductItem;