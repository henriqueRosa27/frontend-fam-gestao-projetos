import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "80vw",
    margin: "0 auto",
    padding: "14px 7px",
    color: "#524000",
  },
  text: {
    color: "#524000",
    fontWeight: 600,
  },
  link: {
    color: "#524000",
    fontWeight: 500,
  },
}));

export { useStyles };
