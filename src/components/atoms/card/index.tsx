import React, { ReactChild, ReactChildren, ReactNode } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Card = (props: Props) => (
  <div className={classnames(styles.card, props.className)}>
    {props.children}
  </div>
);

Card.defaultProps = {
  className: "",
  children: "",
};

export default Card;
