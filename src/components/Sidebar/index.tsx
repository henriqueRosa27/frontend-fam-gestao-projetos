import { FC } from "react";
import { Drawer } from "@material-ui/core";
import clsx from "clsx";

import { ListItems } from "./listItem";
import { useStyles } from "./styles";

interface SidebarComponentProps {
  open: boolean;
}

export const SidebarComponent: FC<SidebarComponentProps> = ({
  open,
}: SidebarComponentProps) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}>
      <ListItems />
    </Drawer>
  );
};
