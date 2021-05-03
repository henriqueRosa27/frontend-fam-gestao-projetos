import styled from "styled-components";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import { ExitToAppOutlined } from "@material-ui/icons";

const Grow = styled.div`
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: "100%";
`;

const AppBarComponent = styled(AppBar)`
  background-color: #fff;
`;

const ExitIcon = styled(ExitToAppOutlined)`
  margin-left: 10px;
`;

const Titulo = styled(Typography)`
  color: #952227;
`;

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("xs")]: {
      background:
        "linear-gradient(-206deg, rgba(149, 34, 39, 0.1) 60%, rgba(149, 34, 39, 0.05))",
    },
    [theme.breakpoints.down("xs")]: {
      background: "rgba(149, 34, 39, 0.05)",
    },
  },
  hamburger: {
    marginRight: theme.spacing(2),
  },
  button: {
    padding: "0 15px !important",
    background: "transparent",
    color: "#952227",
    boxShadow: "none",
    border: "1px solid #952227",
    "&:hover": {
      background: "#952227",
      color: "white",
    },
  },
}));

export { useStyles, Titulo, ExitIcon, AppBarComponent, Container, Grow };
