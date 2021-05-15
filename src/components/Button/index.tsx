import { FC, ElementType } from "react";
import { Button, ButtonProps } from "@material-ui/core";

import { useStyles } from "./styles";

interface ButtonComponentProps extends ButtonProps {
  text: string;
  component?: ElementType;
  to?: string;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  text,
  ...props
}: ButtonComponentProps) => {
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
