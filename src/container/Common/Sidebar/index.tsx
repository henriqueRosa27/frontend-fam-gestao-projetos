import { FC } from "react";

import { SidebarComponent } from "../../../components";

interface SidebarContainerProps {
  open: boolean;
  toogleDrawer: () => void;
}

const SidebarContainer: FC<SidebarContainerProps> = ({
  open,
  toogleDrawer,
}: SidebarContainerProps) => {
  return <SidebarComponent open={open} toogleDrawer={toogleDrawer} />;
};

export { SidebarContainer };
