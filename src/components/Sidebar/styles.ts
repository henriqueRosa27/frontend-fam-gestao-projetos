import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginTop: 60,
    height: "calc(100% - 60px)",
    [theme.breakpoints.down("xs")]: {
      marginTop: 48,
      height: "calc(100% - 48px)",
    },
    background:
      "linear-gradient(-206deg, rgba(149, 34, 39, 0.95) 35%, rgba(149, 34, 39, 0.6))",
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 60,
    height: "calc(100% - 60px)",
    [theme.breakpoints.down("xs")]: {
      marginTop: 48,
      height: "calc(100% - 48px)",
    },
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    background:
      "linear-gradient(-206deg, rgba(149, 34, 39, 0.95) 35%, rgba(149, 34, 39, 0.6))",
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
  },
  listItemIcon: {
    color: "white",
    transition: "margin-left .2s",
    [theme.breakpoints.down("xs")]: {
      transition: "margin-left .2s",
      marginLeft: -5,
    },
  },
  listItemText: { color: "white" },
}));

export const popoverStyle = makeStyles(theme => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
    color: "black",
    fontWeight: 2,
    background:
      "linear-gradient(-206deg, rgba(149, 34, 39, 0.1) 60%, rgba(149, 34, 39, 0.05))",
  },
}));
