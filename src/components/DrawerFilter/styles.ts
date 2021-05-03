import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    width: 455,
    padding: 20,
  },
  header: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    margin: 20,
  },
}));

export { useStyles };
