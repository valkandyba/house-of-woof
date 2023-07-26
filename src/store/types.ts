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
  checkIsAddedItem: (id: string) => boolean;
  numberOfProductItems: number;
}

export type FavoriteItem = CartItem;

export interface FavoriteItemsContext {
  favoriteItems: FavoriteItem[];
  handleAddFavoriteItem: (item: FavoriteItem) => void;
  handleRemoveFavoriteItem: (id: string) => void;
  checkIsAddedFavoriteItem: (id: string) => boolean;
  numberOfFavoriteProductItems: number;
}
