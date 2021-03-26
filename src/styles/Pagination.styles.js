import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Pagination: {
    position: "absolute",
    bottom: "0",
    left: ({ direction }) => (direction === "left" ? "0" : "auto"),
    right: ({ direction }) => (direction === "right" ? "0" : "auto"),
    fontSize: "3.2rem",
    color: "#0448ab",
    cursor: "pointer",
  },
});

export default useStyles;
