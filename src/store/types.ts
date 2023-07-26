export interface CartItem {
  id: string;
  img: string;
  name: string;
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
  numberOfProductItems: number;
}

export interface FavoriteItemsContext {
  favoriteItems: CartItem[];
  handleAddFavoriteItem: (item: CartItem) => void;
  handleRemoveFavoriteItem: (id: string) => void;
  handleIncrementFavoriteItem: (id: string) => void;
  handleDecrementFavoriteItem: (id: string) => void;
  numberOfFavoriteProductItems: number;
}
