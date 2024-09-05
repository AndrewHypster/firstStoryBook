import React from "react";
import cn from "../../cn";
import classes from "./InputLabel.module.css";

const InputLabel = ({ type }) => {
  const mainCn = cn(
    classes.inputLabel,
    classes[type],
  );

  return (
    <div className={mainCn}>
      <label className={classes.label} htmlFor="email">
        Email
      </label>
      <div className={classes.tooltip}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.info}
          title="some"
        >
          <g clip-path="url(#clip0_27120_2392)">
            <path
              d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
              stroke="#A0A0AB"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_27120_2392">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span class={classes.tooltipText}>This is a tooltip</span>
      </div>
    </div>
  );
};

export default InputLabel