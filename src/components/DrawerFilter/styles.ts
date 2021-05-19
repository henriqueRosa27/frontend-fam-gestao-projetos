import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    width: 450,
    padding: 20,
  },
  header: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    margin: 20,
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export { useStyles };
