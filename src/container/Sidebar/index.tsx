import { FC } from "react";

import { SidebarComponent } from "../../components";

interface SidebarContainerProps {
  open: boolean;
}

export const SidebarContainer: FC<SidebarContainerProps> = ({
  open,
}: SidebarContainerProps) => {
  return <SidebarComponent open={open} />;
};
