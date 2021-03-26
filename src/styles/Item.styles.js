import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Item: {
    width: "100%",
    height: "4rem",
  },
  col: {
    height: "100%",
    border: "1px solid transparent",
    "&:nth-of-type(1), &:nth-of-type(3)": {
      fontSize: "14px",
      [sizes.down("sm")]: {
        display: "none",
      },
    },
    "&:nth-of-type(2)": {
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
    },
  },
  container: {
    position: "relative",
    width: "59.5vw",
    padding: "9px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "justify",
    marginRight: "auto",
    [sizes.down("sm")]: {
      width: "78.5vw",
    },
  },
  link: {
    textDecoration: "none",
    color: "currentColor",
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderBottom: "1px solid currentColor",
    },
  },
  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "3px 6px",
    backgroundImage: "linear-gradient(to bottom, #0575e6, #021b79)",
    border: "0",
    borderRadius: "3px",
    fontSize: "1.4rem",
    color: "#f5f5f7",
    opacity: "0.9",
    outline: "none",
    cursor: "pointer",
    "&:first-of-type": {
      right: "4.6rem",
    },
    "&:last-of-type": {
      right: "0",
    },
    "&:hover": {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(to bottom, #0575e6, #021b79)",
    },
    "&:active": {
      backgroundImage: "none",
      backgroundColor: "#021b79",
    },
  },
});

export default useStyles;
