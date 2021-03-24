import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  About: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "1366px",
    padding: "4.4rem 2.2rem 0",
    "@media (max-width: 1366px)": {
      width: "100%",
    },
  },
  h1: {
    fontSize: "4.8rem",
    fontWeight: "300",
    letterSpacing: "2px",
    marginBottom: "2rem",
  },
  h2: {
    fontSize: "3.2rem",
    fontWeight: "400",
  },
  h4: {
    fontSize: "2.4rem",
    fontWeight: "300",
  },
  p: {
    fontSize: "1.8rem",
    fontWeight: "300",
    lineHeight: "2.4rem",
  },
  philosophy: {
    width: "100%",
    height: "71.8rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [sizes.down("md")]: {
      alignItems: "center",
      textAlign: "center",
    },
    [sizes.down("sm")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  container: {
    width: "100%",
    margin: "10rem 0",
    display: "flex",
    justifyContent: "space-between",
    [sizes.down("sm")]: {
      display: "block",
    },
  },
  motto: {
    width: "30%",
    textAlign: "center",
    [sizes.down("sm")]: {
      width: "100%",
    },
  },
  education: {
    width: "40%",
    textAlign: "center",
    [sizes.down("sm")]: {
      width: "100%",
    },
  },
  goal: {
    width: "30%",
    textAlign: "center",
    [sizes.down("sm")]: {
      width: "100%",
    },
  },
  listContainer: {
    width: "50%",
    margin: "0 auto",
    textAlign: "justify",
    [sizes.down("md")]: {
      width: "80%",
    },
  },
  list: {
    listStyle: "none",
  },
  item: {},
});

export default useStyles;
