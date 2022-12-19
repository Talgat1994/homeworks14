import React, { useContext } from "react";
import { MenuModalStyle } from "../style/Style";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import ChangeColor from "../../../store/ChangeColor";

const MenuModal = ({ isAnimation }) => {
  const { changeColorFn, changeFontColorFn, color, fontColor } =
    useContext(ChangeColor);

  const changeColorContent = (data) => {
    changeColorFn(data);
  };

  const changeFontColorContent = (data) => {
    if (color === "#f5f5f5") {
      changeFontColorFn("black");
    } else {
      if (data === "black") {
        changeFontColorFn("white");
      }else {
        changeFontColorFn('black')
      }
    }
    changeFontColorFn(data);
  };

  return (
    <MenuModalStyle isColor={color} isFontColor={fontColor}>
      <div className="setting">
        <h1>Setting</h1>
      </div>

      <div className="toggleDay">
        <div className="night" onClick={() => changeColorContent("#161c24")}>
          <BsFillMoonStarsFill />
        </div>
        <div className="day" onClick={() => changeColorContent("#f5f5f5")}>
          <BsFillSunFill />
        </div>
      </div>
      <div>
        <div className="menu_event_colors">
          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="content__color">
          <div
            className="color"
            onClick={() => changeFontColorContent("#00ab55")}
          >
            <div className="color__item" isColor={color}></div>
          </div>
          <div
            className="color"
            onClick={() => changeFontColorContent("#1acaff")}
          >
            <div className="color__item"></div>
          </div>
          <div
            className="color"
            onClick={() => changeFontColorContent("black")}
          >
            <div className="color__item"></div>
          </div>
          <div
            className="color"
            onClick={() => changeFontColorContent("#7636dc")}
          >
            <div className="color__item"></div>
          </div>
        </div>
      </div>
    </MenuModalStyle>
  );
};

export default MenuModal;
