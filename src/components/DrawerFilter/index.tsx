import { FC } from "react";
import { Drawer } from "@material-ui/core";

import { useStyles } from "./styles";

const DrawerFilterComponent: FC = () => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={false}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div style={{ display: "flex" }}>
            o<h1>Filtro</h1>
          </div>
          <div style={{ cursor: "pointer" }}>x</div>
        </div>
      </div>
    </Drawer>
  );
};

export { DrawerFilterComponent };
