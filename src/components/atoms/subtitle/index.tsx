/* @flow */
import React, { ReactNode } from "react";
import classnames from "classnames";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Subtitle = (props: Props) => (
  <h2 className={classnames(styles.subtitle, props.className)}>
    {props.children}
  </h2>
);

Subtitle.defaultProps = {
  className: "",
  children: "",
};

export default Subtitle;
