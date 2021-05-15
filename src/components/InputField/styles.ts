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
    color: "#726e6e",
    outline: "none",
    "& .MuiOutlinedInput-root": {
      padding: 10,
      "&:hover fieldset": {
        borderColor: (props: { error: boolean }) =>
          props.error ? theme.palette.error.main : theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: (props: { error: boolean }) =>
          props.error ? theme.palette.error.main : theme.palette.primary.main,
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: 5,
    },
  },
}));

export { useStyles };
