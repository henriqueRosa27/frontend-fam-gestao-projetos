import { FC } from "react";
import { SwipeableDrawer, IconButton, Typography } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

import { ButtonComponent } from "src/components";
import { useStyles } from "./styles";

interface DrawerFilterComponentProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  onFilter: () => void;
  children?: JSX.Element;
}

const DrawerFilterComponent: FC<DrawerFilterComponentProps> = ({
  open,
  onClose,
  onOpen,
  onFilter,
  children,
}) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div style={{ display: "flex" }}>
            <Typography variant="h4">Filtro</Typography>
          </div>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {children}
        <div className={classes.footer}>
          <ButtonComponent
            variant="outlined"
            color="primary"
            text="Limpar filtros"
          />
          <ButtonComponent
            variant="contained"
            color="primary"
            text="Filtrar"
            onClick={onFilter}
          />
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export { DrawerFilterComponent };
