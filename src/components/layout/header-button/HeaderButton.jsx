import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import ChangeColor from "../../../store/ChangeColor";
import CartIcon from "../../icons/CartIcon";
import cls from "./HeaderButton.module.css";

const HeaderButton = () => {
  const { openModal } = useContext(ChangeColor);
  const { items } = useContext(CartContext);

  const countOfCartItems = items.reduce((currentNum, item) => {
    // +count на карту
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={cls.button} onClick={openModal}>
      <span className={cls.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={cls.badge}>{countOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
