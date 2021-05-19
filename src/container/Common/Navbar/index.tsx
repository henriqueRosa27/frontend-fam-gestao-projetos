import { FC } from "react";

import { NavbarComponent } from "src/components";

interface NavbarContainerProps {
  toogleDrawer: () => void;
}

type Type = FC<NavbarContainerProps>;

const NavbarContainer: Type = ({ toogleDrawer }) => {
  return <NavbarComponent toogleDrawer={toogleDrawer} />;
};

export { NavbarContainer };
