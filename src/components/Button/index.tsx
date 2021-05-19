import { FC, ElementType } from "react";
import { Button, ButtonProps } from "@material-ui/core";

import { useStyles } from "./styles";

interface ButtonComponentProps extends ButtonProps {
  text: string;
  component?: ElementType;
  to?: string;
}
type Type = FC<ButtonComponentProps>;

const ButtonComponent: Type = ({ text, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Button {...props}>{text}</Button>
    </div>
  );
};

ButtonComponent.defaultProps = {
  component: undefined,
  to: undefined,
};

export { ButtonComponent };
