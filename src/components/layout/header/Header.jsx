import React from "react";
import mealImage from "../../../assets/meals.jpg";
import HeaderButton from "../header-button/HeaderButton";
import cls from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={cls.header}>
        <h1>React meals</h1>
        <HeaderButton />
      </header>
      <div className={cls["main-image"]}>
        <img src={mealImage} alt="mealImage" />
      </div>
    </>
  );
};

export default Header;
