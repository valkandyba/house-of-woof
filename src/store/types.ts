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
  checkIsAddedItem: (id: string) => boolean;
  numberOfProductItems: number;
  getItemQuantity: (id: string) => number;
}

export type FavoriteItem = CartItem;

export interface FavoriteItemsContext {
  favoriteItems: FavoriteItem[];
  handleAddFavoriteItem: (item: FavoriteItem) => void;
  handleRemoveFavoriteItem: (id: string) => void;
  checkIsFavoriteItemAdded: (id: string) => boolean;
  numberOfFavoriteProductItems: number;
}
