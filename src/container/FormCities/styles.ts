import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    "& > *": {
      padding: "38px 28px",
      width: "80vw",
      borderRadius: "10px",
      boxShadow: "0 0 30px 0 rgba(193, 193, 193, 0.25)",
      backgroundColor: "#ffffff",
      color: "#000",
      marginTop: "30px",
    },
  },
  containerTitle: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
  },
  h1: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#303030",
    letterSpacing: "0.48px",
    marginLeft: "13px",
  },
  buttonSave: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "6px 29px",
      borderRadius: "30px",
      boxShadow: "none",
      textTransform: "none",
      borderColor: "#524000",
      color: "#524000",
    },
    "& .MuiButton-outlined:hover": {
      backgroundColor: "#524000",
      borderColor: "#fff",
      color: "#fff",
    },
  },
}));

export { useStyles };
