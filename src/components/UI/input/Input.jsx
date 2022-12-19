import React, { forwardRef } from "react";
import cls from "./Input.module.css";

const Input = forwardRef(({label, input}, ref) => {
  return (
    <div className={cls.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
})

export default Input;
