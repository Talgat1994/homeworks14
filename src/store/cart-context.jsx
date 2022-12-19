import { createContext } from "react";

const CartContext = createContext({
  items: [],//default value and all
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export default CartContext;
