import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "1vh",
    marginBottom: "15px",
    marginTop: "15px",
  },
  rootAddButton: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "6px 29px",
      borderRadius: "30px",
      boxShadow: "none",
      textTransform: "none",
      borderColor: "black",
      color: "black",
    },
    "& .MuiButton-outlined:hover": {
      backgroundColor: "#fff",
      border: `1px solid black`,
    },
  },
  rootFilterButton: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "6px 29px",
      borderRadius: "30px",
      backgroundColor: "#952227",
      boxShadow: "none",
      textTransform: "none",
      color: "white",
    },
    "& .MuiButton-contained:hover": {
      backgroundColor: "#952227",
    },
  },
}));
