import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80vw",
    margin: "0 auto",
    padding: "14px 7px",
    color: theme.palette.primary.main,
  },
  text: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  link: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export { useStyles };
