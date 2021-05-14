import { FC, useState } from "react";

import { BreadcrumbsComponent } from "src/components/Breadcrumbs";
import { NavbarContainer } from "src/container/Common/Navbar";
import { SidebarContainer } from "src/container/Common/Sidebar";
import { BackdropContainer } from "src/container/Common/Backdrop";
import { SnackbarContainer } from "src/container/Common/Snackbar";
import { useStyles } from "./styles";

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
