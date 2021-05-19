import { FC } from "react";

import { SidebarComponent } from "src/components";

interface SidebarContainerProps {
  open: boolean;
  toogleDrawer: () => void;
}

type Type = FC<SidebarContainerProps>;

const SidebarContainer: Type = ({ open, toogleDrawer }) => {
  return <SidebarComponent open={open} toogleDrawer={toogleDrawer} />;
};

export { SidebarContainer };
