import { FC } from "react";
import { SwipeableDrawer, withWidth, isWidthUp } from "@material-ui/core";
import clsx from "clsx";

import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { ListItems } from "./listItem";
import { useStyles } from "./styles";

interface SidebarComponentProps {
  open: boolean;
  toogleDrawer: () => void;
  width: Breakpoint;
}

const SidebarComponentT: FC<SidebarComponentProps> = ({
  open,
  toogleDrawer,
  width,
}: SidebarComponentProps) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      variant={isWidthUp("sm", width) ? "permanent" : "temporary"}
      anchor="left"
      open={open}
      onOpen={toogleDrawer}
      onClose={toogleDrawer}
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
    </SwipeableDrawer>
  );
};

const SidebarComponent = withWidth()(SidebarComponentT);

export { SidebarComponent };
