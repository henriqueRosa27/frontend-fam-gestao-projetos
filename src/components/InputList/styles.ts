import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px",
    fontSize: "0.9rem",
  },
  label: {
    width: "100%",
    height: "20px",
    fontSize: "1rem",
    fontWeight: 600,
    color: (props: { error: boolean }) =>
      props.error ? theme.palette.error.main : theme.palette.primary.main,
    display: "block",
    marginBottom: "4px",
  },
  input: {
    width: "100%",
    "& .MuiInput-underline::before": {
      content: "none",
    },
    "& .MuiInput-underline::after": {
      content: "none",
      borderBottom: "none",
    },
    "& .MuiInputBase-root": {
      color: theme.palette.primary.main,
      padding: 5,
      animationDuration: "0ms",
      backgroundColor: "#FFFFFF",
      boxSizing: "border-box",
      borderRadius: "5px",
      "&:hover fieldset": {
        borderColor: (props: { error: boolean }) =>
          props.error ? theme.palette.error.main : theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: (props: { error: boolean }) =>
          props.error ? theme.palette.error.main : theme.palette.primary.main,
      },
    },
  },
}));

export { useStyles };
