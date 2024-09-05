import { PropTypes } from "prop-types";
import React from "react";
import cn from "../../cn";
import classes from "./InputText.module.css";

const InputText = ({ userText, children, size, place, position, theme }) => {
  /* cn - class name бере масив класів і з'єднує їх в одну строку через пробіл */
  const mainCn = cn(
    classes.inputText,
    userText == "off" ? classes.offUserText : "",
    classes[size],
    classes[place],
    classes[position],
  );

  return (
    <input
      type="text"
      className={mainCn}
      value={userText == 'on' ? children : "Input..."}
      disabled={userText == 'of'}
      style={{color: theme == 'light'? '': theme == 'dark'?'#FAFAFA':''}}
    />
  );
};

export default InputText;

InputText.propTypes = {
  userText: PropTypes.oneOf(["on", "off"]),
  size: PropTypes.oneOf(["xs", "sm", "lg", "xl"]),
  place: PropTypes.oneOf(["top", "side"]),
  position: PropTypes.oneOf(["left", "right"]),
};

InputText.defaultProps = {
  userText: "on",
  size: "xs",
  place: "top",
  position: "left",
};
