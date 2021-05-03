import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "1rem",
    marginRight: "1rem",
    [theme.breakpoints.up("sm")]: {
      minWidth: "344px !important",
    },
  },
  alert: {
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: "10",
    borderTopRightRadius: ".5rem",
    borderBottomRightRadius: ".5rem",
    "& .MuiAlert-icon": {
      fontSize: "30px",
      paddingTop: "14px",
      marginRight: "18px",
    },
  },
  alertTitle: {
    color: "black",
    fontWeight: "bold",
  },
  alertMessage: {
    fontSize: ".9rem",
    display: "flex",
    flexDirection: "column",
  },
  errorAlert: {
    borderLeft: ".4rem solid red",
  },
  successAlert: {
    borderLeft: ".4rem solid #43a047",
  },
  warningAlert: {
    borderLeft: ".4rem solid #ff9800",
  },
  infoAlert: {
    borderLeft: ".4rem solid #2196f3",
  },
}));

export { useStyles };
