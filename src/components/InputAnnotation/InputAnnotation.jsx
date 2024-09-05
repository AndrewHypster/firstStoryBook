import React from "react";
import cn from "../../cn";
import classes from "./InputAnnotation.module.css";

const InputAnnotation = ({ type }) => {
  const mainCn = cn(
    classes.inputAnnotation,
    classes[type]
  );

  return (
    <span className={mainCn}>
      This is a hint text to help user.
    </span>
  );
};

export default InputAnnotation