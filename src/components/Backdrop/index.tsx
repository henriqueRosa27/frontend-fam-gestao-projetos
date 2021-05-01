import { FC } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useStyles } from "./styles";

interface BackdropComponent {
  open: boolean;
}

export const BackdropComponent: FC<BackdropComponent> = ({
  open,
}: BackdropComponent) => {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" size={100} thickness={5} />
      </Backdrop>
    </div>
  );
};
