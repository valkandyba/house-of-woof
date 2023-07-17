import React, { useReducer } from 'react';
import CartContext from '../Cart/cart-context';
import { CartItem, CartItemsContext } from '../types';

interface CartProviderProps {
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

const cartReducer = (
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

const CartProvider: React.FC<CartProviderProps> = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, []);

  const handleAddItem = (item: CartItem) => {
    dispatchCartAction({ type: ActionType.ADD, payload: item });
  };

  const handleIncrementItem = (id: string) => {
    dispatchCartAction({ type: ActionType.INCREMENT, payload: { id } });
  };

  const handleDecrementItem = (id: string) => {
    dispatchCartAction({ type: ActionType.DECREMENT, payload: { id } });
  };

  const handleRemoveItem = (id: string) => {
    dispatchCartAction({ type: ActionType.REMOVE, payload: { id } });
  };

  const cartContext: CartItemsContext = {
    items: cartState,
    handleAddItem,
    handleRemoveItem,
    handleIncrementItem,
    handleDecrementItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
