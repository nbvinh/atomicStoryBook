import { ReactNode } from "react";
import Button from "../../atoms/button";
import Card from "../../atoms/card";
import Title from "../../atoms/title";

type Props = {
  children?: ReactNode;
  className?: string;
  title: string;
  button?: string;
};

const Block = (props: Props) => (
  <Card className={props.className}>
    <Title>{props.title}</Title>
    {props.children}
    {props.button !== "" && <Button>{props.button}</Button>}
  </Card>
);

Block.defaultProps = {
  className: "",
  children: "",
  title: "",
  button: "",
};

export default Block;
