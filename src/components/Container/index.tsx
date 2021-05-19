import { FC } from "react";
import { useStyles } from "./styles";

interface ContainerComponentProps {
  children: JSX.Element | JSX.Element[];
}
type Type = FC<ContainerComponentProps>;

const ContainerComponent: Type = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export { ContainerComponent };
