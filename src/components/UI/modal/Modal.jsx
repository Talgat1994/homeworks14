import React, { useContext } from "react";
import cls from "./Modal.module.css";
import ReactDOM from "react-dom";
import ChangeColor from "../../../store/ChangeColor";

const Backdrop = () => {
  const { closeModal } = useContext(ChangeColor);

  return <div className={cls.backdrop} onClick={closeModal} />;
};

const ModalOverLay = ({ children }) => {
  return (
    <div className={cls.modal}>
      <div className={cls.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
