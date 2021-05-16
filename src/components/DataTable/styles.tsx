import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80vw",
    borderRadius: "5px",
    margin: "0 auto",
  },
  show: {
    fontSize: "1rem",
    color: "#90939c",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "15px",
  },
  table: {
    width: "100%",
    background: "#fff",
    alignSelf: "end",
  },

  tableToolBar: {
    width: "100%",
    marginTop: "1vh",
    marginBottom: "1vw",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  title: {
    fontWeight: 600,
    letterSpacing: "normal",
    lineHeight: "1.5",
    margin: "1.125rem 0rem 1.125rem 2rem",
  },

  tableHead: {
    background: "white",
    justifyContent: "flex-start",
    cursor: "pointer",
    fontSize: "0.875rem",
    paddingLeft: "2rem",
    lineHeight: "1.5",
    fontWeight: 600,
    "& :hover": {
      color: "rgb(149, 34, 39) !important",
    },
  },
  divHead: {
    "& .MuiTableSortLabel-icon": {
      color: "black",
    },
  },

  tableRow: {
    "&:nth-of-type(odd)": {
      width: "100%",
      background: "#f9f9f9",
    },
    "& .MuiTableCell-root": {
      paddingLeft: "2rem",
      borderBottom: "none",
      height: 20,
    },

    "&:hover": {
      backgroundColor: "rgba(135, 117, 0, 0.1) !important",
    },
  },
  tableRowCursor: {
    cursor: "pointer",
  },
});

export { useStyles };
