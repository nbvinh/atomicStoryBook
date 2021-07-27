import classnames from "classnames";
import { ReactNode } from "react";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Title = (props: Props) => (
  <h1 className={classnames(styles.title, props.className)}>
    {props.children}
  </h1>
);

Title.defaultProps = {
  className: "",
  children: "",
};

export default Title;
