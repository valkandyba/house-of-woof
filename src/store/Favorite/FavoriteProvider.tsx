import React, { useEffect, useReducer } from 'react';
import { CartItem, FavoriteItemsContext } from '../types';
import FavoriteContext from './favorite-context';

interface FavoriteProviderProps {
  children: React.ReactNode;
}

enum ActionType {
  ADD = 'ADD',
  INCREMENT = 'INCREMENT',
  REMOVE = 'REMOVE',
  DECREMENT = 'DECREMENT',
}

interface Action {
  type: ActionType.DECREMENT | ActionType.REMOVE | ActionType.INCREMENT;
  payload: Pick<CartItem, 'id'>;
}

interface ActionAdd {
  type: ActionType.ADD;
  payload: CartItem;
}

const favoriteReducer = (
  state: CartItem[],
  action: Action | ActionAdd,
): CartItem[] => {
  switch (action.type) {
    case ActionType.ADD:
      return [...state, action.payload];

    case ActionType.REMOVE:
      return state.filter(item => item.id !== action.payload.id);

    case ActionType.INCREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        } else {
          return item;
        }
      });

    case ActionType.DECREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

const FavoriteProvider: React.FC<FavoriteProviderProps> = props => {
  const initialState: CartItem[] = JSON.parse(
    sessionStorage.getItem('favoriteItems') || '[]',
  );
  const [cartState, dispatchCartAction] = useReducer(
    favoriteReducer,
    initialState,
  );

  useEffect(() => {
    sessionStorage.setItem('favoriteItems', JSON.stringify(cartState));
  }, [cartState]);

  const handleAddFavoriteItem = (item: CartItem) => {
    dispatchCartAction({ type: ActionType.ADD, payload: item });
  };

  const handleIncrementFavoriteItem = (id: string) => {
    dispatchCartAction({ type: ActionType.INCREMENT, payload: { id } });
  };

  const handleDecrementFavoriteItem = (id: string) => {
    dispatchCartAction({ type: ActionType.DECREMENT, payload: { id } });
  };

  const handleRemoveFavoriteItem = (id: string) => {
    dispatchCartAction({ type: ActionType.REMOVE, payload: { id } });
  };

  const favoriteContext: FavoriteItemsContext = {
    favoriteItems: cartState,
    handleAddFavoriteItem,
    handleRemoveFavoriteItem,
    handleIncrementFavoriteItem,
    handleDecrementFavoriteItem,
  };

  return (
    <FavoriteContext.Provider value={favoriteContext}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
