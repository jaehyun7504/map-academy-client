import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Pagination: {
    float: ({ direction }) => direction,
    margin: ({ direction }) =>
      direction === "left" ? "1.85rem 0 0 1.2rem" : "1.85rem 3.7rem 0 0",
    fontSize: "3.2rem",
    color: "#0448ab",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-3px)",
    },
    "&:active": {
      transform: "translateY(-1.5px)",
    },
  },
});

export default useStyles;
