/* @flow */
import classNames from "classnames";
import React, { ReactChild, ReactChildren, ReactNode } from "react";
import styles from "./index.module.css";
type Props = {
  type: "button" | "reset" | "submit";
  theme: string;
  size: string;
  onClick: () => void;
  children: ReactNode;
  className: string;
  disabled: boolean;
};

export const ButtonTheme = {
  DEFAULT: "default",
  ROUNDED: "rounded",
};

export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
const Button = (props: Props) => {
  const { onClick, children, theme, size, className, type, disabled } = props;
  const classProps: string = classNames(
    styles.button,
    styles[size],
    styles[theme],
    {
      [styles.disabled]: disabled,
    },
    className
  );
  return (
    <button
      type={type}
      className={classProps}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.SMALL,
  onClick: () => {},
  className: "",
  disabled: false,
  children: "",
  type: "button",
};
export default Button;
