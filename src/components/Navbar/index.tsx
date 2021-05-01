import { FC } from "react";
import { Toolbar, IconButton, Fab } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import {
  Grow,
  AppBarComponent,
  ExitIcon,
  Titulo,
  Container,
  useStyles,
} from "./styles";

interface NavbarComponentProps {
  toogleDrawer: () => void;
}

export const NavbarComponent: FC<NavbarComponentProps> = ({
  toogleDrawer,
}: NavbarComponentProps) => {
  const classes = useStyles();

  return (
    <AppBarComponent position="fixed" className={classes.appBar}>
      <Toolbar>
        <Container>
          <IconButton
            onClick={toogleDrawer}
            aria-label="Abrir drawer"
            edge="start"
            className={classes.hamburger}>
            <Menu htmlColor="#952227" />
          </IconButton>
          <Titulo variant="h6" noWrap>
            Gestão de Projetos
          </Titulo>
        </Container>
        <Grow />
        <Fab size="small" variant="extended" className={classes.button}>
          Sair
          <ExitIcon />
        </Fab>
      </Toolbar>
    </AppBarComponent>
  );
};
