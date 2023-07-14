import { ProductType } from "@/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  product: ProductType;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  addToCart: (product: ProductType, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: ProductType, quantity: number) => {
    const existingItem = cartItems.find(
      (item) => item.product._id === product._id
    );

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
      };
      const updatedItems = cartItems.map((item) =>
        item.product._id === product._id ? updatedItem : item
      );
      setCartItems(updatedItems);
    } else {
      const newItem = { product, quantity };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedItems = cartItems.filter(
      (item) => item.product._id !== productId
    );
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (productId: string) => {
    const existingItem = cartItems.find(
      (item) => item.product._id === productId
    );

    if (existingItem && existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      const updatedItems = cartItems.map((item) =>
        item.product._id === productId ? updatedItem : item
      );
      setCartItems(updatedItems);
    } else {
      removeFromCart(productId);
    }
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + 100 * item.quantity,
    0
  );

  const cartContextValue: CartContextType = {
    cartItems,
    totalQuantity,
    totalPrice,
    addToCart,
    removeFromCart,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};