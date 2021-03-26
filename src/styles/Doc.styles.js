import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Doc: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(100vh - 5.432rem)",
    paddingTop: "4.4rem",
  },
  container: {
    position: "relative",
    width: "67%",
    minHeight: "calc(100% - 5rem)",
    margin: "0 auto",
    padding: "5rem 0",
    [sizes.down("md")]: {
      width: "75%",
    },
  },
  title: {
    fontSize: "3.6rem",
    fontWeight: "300",
  },
  horizon: {
    margin: "1.8rem 0 3.6rem",
    height: "3px",
    border: "0",
    borderRadius: "2px",
    backgroundImage: "linear-gradient(to right, #0575e6, #021b79)",
  },
  body: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "1.5",
  },
  lineBreak: {
    display: "block",
    height: "16px",
  },
  image: {
    height: "40.6rem",
    display: "block",
    margin: "8rem auto 0 auto",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    [sizes.down("md")]: {
      height: "auto",
      width: "75%",
    },
  },
});

export default useStyles;
