import styled from "styled-components";

const MenuStyle = styled.div`
  & {
    position: fixed;
    right: 3px;
    top: 35%;
    z-index: 10;
  }
  & button {
    position: absolute;
    z-index: 2;
    right: 5px;
    top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1px solid #ccc;
    border-radius: 20px 20px 0 20px;
    background-color: #f7f7f7;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  & button svg {
    font-size: 25px;
  }
`;

const MenuModalStyle = styled.div`
  & {
    width: 300px;
    height: 90vh;
    background-color: ${({ isColor }) => (isColor ? isColor : "#f5f5f5")};
    color: ${({ isFontColor, isColor }) =>
      isFontColor ? isFontColor : isColor === "#161c24" ? "white" : "black"};
    position: fixed;
    z-index: 1;
    right: 10px;
    top: 90px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    animation: openModal
      0.5s ease-in-out 1;
    border-radius: 5px;
    padding: 20px;
  }
  & button {
    border: 1px solid;
    border-radius: 5px;
    color: red;
    top: 0%;
  }
  & .setting {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  & .toggleDay {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 30%;
  }
  & .toggleDay .night {
    width: 40%;
    height: 40%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: rebeccapurple 3px 3px 6px 0px inset,
      rebeccapurple -3px -3px 6px 1px inset;
    background: linear-gradient(#3a3387, #7475b6);
    color: #16ef8d;
  }
  & .toggleDay .day {
    width: 40%;
    height: 40%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: darkblue 3px 3px 6px 0px inset, #c9ebff -3px -3px 6px 1px inset,
      #c9ebff -3px -3px 6px 1px inset, #c9ebff -3px -3px 6px 1px inset;
    background: linear-gradient(#abb5ff, #c9ebff, #e1f8ff);
    color: yellow;
  }
  & .night svg {
    font-size: 40px;
  }
  & .day svg {
    font-size: 40px;
  }

  & .menu_event_colors {
    height: 20vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
  }
  & .cards {
    width: 98%;
    height: 95%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: flex-end;
    padding: 10px;
    border: 1px solid #ccc;
    background: linear-gradient(darkblue, aqua);
  }
  & .card {
    width: 98%;
    height: 80%;
    border: 0.1px solid #ccc;
    justify-self: flex-start;
    background-color: #16ef8d;
    border-radius: 5px;
  }

  & .card:nth-child(2) {
    width: 78%;
    height: 80%;
    background-color: #16ef8dc1;
  }
  & .card:nth-child(3) {
    width: 58%;
    height: 80%;
    background-color: #16ef8d91;
  }
  & .cards:last-child {
    background: linear-gradient(#1a1a20, rebeccapurple);
  }
  & .cards:last-child .card:nth-child(1) {
    background: #f5f5f5;
  }
  & .cards:last-child .card:nth-child(2) {
    background: #f5f5f5;
    justify-self: flex-end;
  }
  & .cards:last-child .card:nth-child(3) {
    background: #f5f5f5;
    justify-self: flex-end;
  }
  & .content__color {
    height: 20vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
  }

  & .color {
    width: 95%;
    height: 95%;
    border: 1px solid;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .color__item {
    width: 90%;
    height: 50%;
    background: #16ef8d;
    border-radius: 50%;
  }
  & .color:nth-child(2) .color__item {
    background-color: #1acaff;
  }
  & .color:nth-child(3) .color__item {
    background: ${({ isColor }) =>
      isColor === "#161c24" ? "white" : isColor === "white" ? "#000" : "black"};
  }
  & .color:nth-child(4) .color__item {
    background: rebeccapurple;
  }

  @keyframes openModal {
    0% {
      transform: translateX(350px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes closeModal {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(350px);
    }
  }
`;

const MealStyle = styled.div`
  & {
    background-color: ${({ isColor }) => isColor};
    height: 76vh;
    color: ${({ isFontColor }) => isFontColor};
  }
`;

export { MenuStyle, MenuModalStyle, MealStyle };
