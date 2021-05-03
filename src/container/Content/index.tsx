import { FC, useState } from "react";

import { useStyles } from "./styles";
import { NavbarContainer } from "../Navbar";
import { SidebarContainer } from "../Sidebar";
import { BackdropContainer } from "../Backdrop";
import { SnackbarContainer } from "../Snackbar";
import { BreadcrumbsComponent } from "../../components/Breadcrumbs";

interface ContentContainerProps {
  children: JSX.Element | JSX.Element[];
}

const ContentContainer: FC<ContentContainerProps> = ({
  children,
}: ContentContainerProps) => {
  const classes = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);

  const toogleDrawer = (): void => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <div className={classes.root}>
      <SnackbarContainer />
      <BackdropContainer />
      <NavbarContainer toogleDrawer={toogleDrawer} />
      <SidebarContainer open={drawerIsOpen} toogleDrawer={toogleDrawer} />

      <main className={classes.main}>
        <div className={classes.toolbar} />
        <BreadcrumbsComponent />
        <div className={classes.content}>{children}</div>
      </main>
    </div>
  );
};

export { ContentContainer };
