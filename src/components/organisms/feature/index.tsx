import classnames from "classnames";
import { ReactNode } from "react";

import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
  image: string;
};

const Feature = (props: Props) => (
  <div
    style={{ backgroundImage: `url(${props.image})` }}
    className={classnames(styles.feature, props.className)}
  >
    {props.children}
  </div>
);

Feature.defaultProps = {
  className: undefined,
  children: undefined,
  image: "",
};

export default Feature;
