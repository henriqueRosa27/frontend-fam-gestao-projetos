import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
  title: {
    fontWeight: 600,
    letterSpacing: "normal",
    lineHeight: "1.5",
    marginLeft: "1rem",
  },
}));

export { useStyles };
