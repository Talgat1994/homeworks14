import React, { useContext } from "react";
import ChangeColor from "../../../store/ChangeColor";
import { CardStyle } from "../../style/Styles";

const Card = ({ children }) => {

  const {color} = useContext(ChangeColor)

  return <CardStyle isColor={color}>{children}</CardStyle>;
};

export default Card;
