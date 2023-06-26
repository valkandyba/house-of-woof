import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { StoreItem }  from '../../store/types'

const ProductItem: React.FC<StoreItem> = ({id, name, img, description, price}) => {
    return (
        <div>
            <Card>
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
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default ProductItem;