import React, { useContext } from "react";
import cls from "./MealItem.module.css";
import MealItemForm from "../meal_item_form/MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, decription, price, id }) => {
  const newPrice = price.toFixed(2);

  const { addItem } = useContext(CartContext);

  const addToCcartHandler = (amount) => {
    //  отп объект при нажатии
    addItem({
      id: id,
      amount: amount,
      price: price,
      name: name,
      decription: decription,
    });
  };

  return (
    <li className={cls.meal}>
      <div>
        <h3>{name}</h3>
        <p className={cls.decription}>{decription}</p>
        <p className={cls.price}>${newPrice}</p>
      </div>

      <div>
        <MealItemForm id={id} onHandler={addToCcartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
