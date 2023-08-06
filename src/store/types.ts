export interface CartItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
}

export interface CartItemsContext {
  items: CartItem[];
  handleAddItem: (item: CartItem) => void;
  handleRemoveItem: (id: string) => void;
  handleIncrementItem: (id: string) => void;
  handleDecrementItem: (id: string) => void;
}
