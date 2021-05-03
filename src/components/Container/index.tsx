import { FC } from "react";
import { useStyles } from "./styles";

interface ContainerComponentProps {
  children: JSX.Element | JSX.Element[];
}

const ContainerComponent: FC<ContainerComponentProps> = ({
  children,
}: ContainerComponentProps) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export { ContainerComponent };
