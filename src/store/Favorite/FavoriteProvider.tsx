import React, { useEffect, useReducer } from 'react';
import { FavoriteItem, FavoriteItemsContext } from '../types';
import FavoriteContext from './favorite-context';

interface FavoriteProviderProps {
  children: React.ReactNode;
}

enum ActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

interface Action {
  type: ActionType.REMOVE;
  payload: Pick<FavoriteItem, 'id'>;
}

interface ActionAdd {
  type: ActionType.ADD;
  payload: FavoriteItem;
}

const favoriteReducer = (
  state: FavoriteItem[],
  action: Action | ActionAdd,
): FavoriteItem[] => {
  switch (action.type) {
    case ActionType.ADD:
      return [...state, action.payload];

    case ActionType.REMOVE:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

const FavoriteProvider: React.FC<FavoriteProviderProps> = props => {
  const savedFavorites = sessionStorage.getItem('favoriteItems');
  const initialState: FavoriteItem[] = savedFavorites
    ? JSON.parse(savedFavorites)
    : [];

  const [favoriteState, dispatchFavoriteAction] = useReducer(
    favoriteReducer,
    initialState,
  );

  useEffect(() => {
    sessionStorage.setItem('favoriteItems', JSON.stringify(favoriteState));
  }, [favoriteState]);

  const handleAddFavoriteItem = (item: FavoriteItem) => {
    dispatchFavoriteAction({ type: ActionType.ADD, payload: item });
  };

  const handleRemoveFavoriteItem = (id: string) => {
    dispatchFavoriteAction({ type: ActionType.REMOVE, payload: { id } });
  };

  const numberOfFavoriteProductItems = favoriteState.length;
  const checkIsAddedFavoriteItem = (id: string) =>
    favoriteState.some(favoriteItem => favoriteItem.id === id);

  const favoriteContext: FavoriteItemsContext = {
    favoriteItems: favoriteState,
    handleAddFavoriteItem,
    handleRemoveFavoriteItem,
    checkIsAddedFavoriteItem,
    numberOfFavoriteProductItems,
  };

  return (
    <FavoriteContext.Provider value={favoriteContext}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
