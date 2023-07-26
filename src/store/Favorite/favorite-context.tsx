import React, { createContext } from 'react';
import { FavoriteItemsContext } from '../types';

const FavoriteContext = createContext<FavoriteItemsContext>(
  {} as FavoriteItemsContext,
);

export default FavoriteContext;
