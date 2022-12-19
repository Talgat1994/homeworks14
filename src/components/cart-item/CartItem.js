import React from "react";
import cls from "./CartItem.module.css";

const CartItem = ({
  name,
  amount,
  price,
  onAdd,
  onRemove,
  id,
  item,
}) => {
  return (
    <li className={cls["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={cls.summary}>
          <span className={cls.price}>{price}</span>
          <span className={cls.amount}>X{amount}</span>
        </div>
      </div>
      <div className={cls.actions}>
        <button
          onClick={() => {
            onRemove(id);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            onAdd(item);
          }}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
