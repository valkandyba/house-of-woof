import React, { createContext } from 'react';
import { CartItemsContext } from '../types';

const CartContext = createContext<CartItemsContext>({} as CartItemsContext);

export default CartContext;
