import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  List: {
    position: "absolute",
    top: "0",
    left: 0,
    width: "100%",
    height: "calc(100vh - 5.432rem)",
    paddingTop: "4.4rem",
  },
  container: {
    position: "relative",
    width: "75%",
    minHeight: "calc(100% - 5rem)",
    margin: "0 auto",
    padding: "5rem 0",
    [sizes.down("sm")]: {
      width: "80%",
    },
  },
  table: {
    width: "100%",
    textAlign: "center",
    borderSpacing: "0",
  },
  body: {
    "&::before": {
      content: "''",
      display: "block",
      height: "2rem",
    },
  },
  row: {
    width: "100%",
    height: "4rem",
    backgroundColor: "#ddd",
  },
  col: {
    fontSize: "1.65rem",
    fontWeight: "300",
    border: "1px solid #ddd",
    "&:nth-of-type(1)": {
      width: "5%",
      borderRadius: "10px 0 0 10px",
      [sizes.down("sm")]: {
        display: "none",
      },
    },
    "&:nth-of-type(2)": {
      width: "80%",
      [sizes.down("sm")]: {
        display: "100%",
      },
    },
    "&:nth-of-type(3)": {
      width: "15%",
      borderRadius: "0 10px 10px 0",
      [sizes.down("sm")]: {
        display: "none",
      },
    },
  },
  button: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "3px 6px",
    backgroundImage: "linear-gradient(to bottom, #0575e6, #021b79)",
    border: "0",
    borderRadius: "3px",
    fontSize: "1.4rem",
    color: "#f5f5f7",
    opacity: "0.9",
    outline: "none",
    cursor: "pointer",
    "&:not(:last-of-type)": {
      marginRight: "6px",
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
