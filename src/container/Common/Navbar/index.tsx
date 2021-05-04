import { FC } from "react";

import { NavbarComponent } from "@app/components";

interface NavbarContainerProps {
  toogleDrawer: () => void;
}

const NavbarContainer: FC<NavbarContainerProps> = ({
  toogleDrawer,
}: NavbarContainerProps) => {
  return <NavbarComponent toogleDrawer={toogleDrawer} />;
};

export { NavbarContainer };