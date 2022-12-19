import React from "react";
import Card from "../../UI/card/Card";
import MealItem from "../meal_item/MealItem";
import cls from "./AvailabelMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m4",
    name: "Barbecue Burger",
    description: "American , raw , meaty",
    price: 12.99,
  },
];

const AvaiLableMeals = () => {
  const newList = DUMMY_MEALS.map((item) => (
    <MealItem
      id={item.id}
      name={item.name}
      price={item.price}
      decription={item.description}
      key={item.id}
    />
  ));
  return (
    <section className={cls.meals}>
      <Card>
        <ul>{newList}</ul>
      </Card>
    </section>
  );
};

export default AvaiLableMeals;
