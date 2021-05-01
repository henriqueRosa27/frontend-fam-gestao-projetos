import { FC } from "react";

import { NavbarComponent } from "../../components";

interface NavbarContainerProps {
  toogleDrawer: () => void;
}

export const NavbarContainer: FC<NavbarContainerProps> = ({
  toogleDrawer,
}: NavbarContainerProps) => {
  return <NavbarComponent toogleDrawer={toogleDrawer} />;
};
