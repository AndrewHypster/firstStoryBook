import { PropTypes } from "prop-types";
import React from "react";
import cn from "../../cn";
import InputAnnotation from "../InputAnnotation/InputAnnotation";
import InputGroup from "../InputGroup/InputGroup";
import InputLabel from "../InputLabel/InputLabel";
import classes from "./MainPage.module.css";

const MainPage = ({
  userText,
  children,
  size,
  place,
  position,
  type,
  theme,
}) => {
  const mainCn = cn(classes.mainPage, classes[theme]);
  const title = theme == 'light'? 'Light Mode' : 'Dark Mode'
  const isLight = theme == 'light'

  return (
    <main className={mainCn} style={{color: isLight? '#000':'#fff'}}>
      <h1 className={classes.title} >{title}</h1>
      <ul className={classes.list} style={{filter: isLight? "":'brightness(120%)'}}>
        {Array(5)    /* створює 5 лі з інпутами */
          .fill(1)
          .map(() => (
            <li>
              <InputLabel type={type} />
              <InputGroup
                userText={userText}
                children={children}
                size={size}
                place={place}
                position={position}
                type={type}
                theme={theme}
              />
              <InputAnnotation type={type} />
            </li>
          ))}
      </ul>
    </main>
  );
};

export default MainPage;

MainPage.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
  userText: PropTypes.oneOf(["on", "off"]),
  size: PropTypes.oneOf(["xs", "sm", "lg", "xl"]),
  place: PropTypes.oneOf(["top", "side"]),
  position: PropTypes.oneOf(["left", "right"]),
  type: PropTypes.oneOf([
    "default",
    "hover",
    "focus",
    "error",
    "error-focus",
    "disabled",
  ]),
};

MainPage.defaultProps = {
  theme: "light",
  userText: "on",
  size: "xs",
  place: "top",
  position: "left",
  type: 'default'
};
