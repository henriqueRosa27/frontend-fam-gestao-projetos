import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
    fontSize: "0.9rem",
  },
  label: {
    width: "100%",
    height: "20px",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#524000",
    display: "block",
    marginBottom: "4px",
  },
  input: {
    color: "#726e6e",
    outline: "none",
    "& .MuiOutlinedInput-root": {
      padding: 10,
      "&:hover fieldset": {
        borderColor: "#524000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#524000",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: 5,
    },
  },
}));

export { useStyles };
