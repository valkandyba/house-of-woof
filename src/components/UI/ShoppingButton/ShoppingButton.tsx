import React, { useState } from 'react';
import { IconButton, Input } from '@mui/material';
import {Add, Delete, Remove} from '@mui/icons-material';
import classes from './ShoppingButton.module.scss'

const ShoppingButton = () => {
    const [isAdding, setIsAdding] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleAddClick = () => {
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 3000);
    };

    const handleDeleteClick = () => {
        setQuantity(0);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            {!isAdding ? (
                <IconButton className={classes['quantity-button']} color="primary" onClick={handleAddClick}>
                    <Add />
                </IconButton>
            ) : (
                <div className={classes['input-number']}>
                    {(quantity > 1) ? (
                        <IconButton className={`${classes.button} ${classes.minus}`} color="primary" onClick={handleDecrement}>
                            <Remove />
                        </IconButton>
                    ) : (
                        <IconButton  className={`${classes.button} ${classes.minus}`} color="primary" onClick={handleDeleteClick}>
                            <Delete />
                        </IconButton>
                    )}
                    <Input
                        className={classes.input}
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                    <IconButton className={`${classes.button} ${classes.add}`} color="primary" onClick={handleIncrement}>
                        <Add />
                    </IconButton>
                </div>
            )}
        </div>
    );
};

export default ShoppingButton;
