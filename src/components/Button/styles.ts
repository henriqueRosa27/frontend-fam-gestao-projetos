import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "6px 29px",
      borderRadius: "30px",
      boxShadow: "none",
      textTransform: "none",
    },
  },
  "& .MuiButton-containedPrimary:hover": {
    backgroundColor: "#fff",
  },
}));
