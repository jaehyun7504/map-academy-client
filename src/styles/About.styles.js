import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";
import hero from "../assets/images/hero.jpg";

const useStyles = makeStyles({
  About: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100vw",
    backgroundColor: "#ddd",
  },
  h1: {
    fontFamily: "NanumMyeongjo",
    fontSize: "6rem",
    fontWeight: "400",
    color: "#f5f5f7",
    opacity: "0.9",
    letterSpacing: "1px",
    marginBottom: "3rem",
  },
  h2: {
    fontFamily: "Comfortaa, NanumBarunGothic",
    fontSize: "3.6rem",
    fontWeight: "300",
    letterSpacing: "1px",
  },
  h4: {
    fontSize: "1.8rem",
    fontWeight: "300",
    marginBottom: "5px",
  },
  p: {
    fontSize: "2rem",
    fontWeight: "300",
    color: "#f5f5f7",
    opacity: "0.9",
    letterSpacing: "0.4px",
    lineHeight: "2.9rem",
  },
  s1: {
    letterSpacing: "1.8px",
  },
  s2: {
    letterSpacing: "-1px",
  },
  meaning: {
    fontSize: "1.4rem",
    fontWeight: "300",
    letterSpacing: "1.3px",
  },
  philosophyContainer: {
    width: "100%",
    height: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  philosophy: {
    width: "1366px",
    height: "100%",
    margin: "0 auto",
    padding: "4.4rem 2.2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    "@media (max-width: 1366px)": {
      width: "100%",
    },
    [sizes.down("md")]: {
      alignItems: "center",
      textAlign: "center",
    },
    [sizes.down("sm")]: {
      width: "75%",
    },
  },
  tiltsContainer: {
    width: "100%",
  },
  tilts: {
    width: "1366px",
    margin: "0 auto",
    padding: "10rem 2.2rem",
    display: "flex",
    justifyContent: "space-between",
    gap: "10rem",
    "@media (max-width: 1366px)": {
      width: "100%",
    },
    [sizes.down("lg")]: {
      gap: "3rem",
    },
    [sizes.down("md")]: {
      display: "block",
    },
  },
  tilt: {
    position: "relative",
    height: "40rem",
    backgroundColor: "#eee",
    borderRadius: "8px",
    boxShadow: "0 8px 10px -6px rgba(0, 0, 0, 0.55)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
    [sizes.down("md")]: {
      width: "100%",
      height: "30rem",
      "&:not(:last-of-type)": {
        marginBottom: "3rem",
      },
    },
  },
  motto: {
    flex: "3",
  },
  education: {
    flex: "4",
  },
  goal: {
    flex: "3",
  },
  image: {
    width: "100%",
    height: "50%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%",
      filter: "grayscale(1)",
      transform: "scale(1.2)",
      transition: "all 0.25s ease-out",
    },
    "&:hover": {
      "& img": {
        filter: "grayscale(0)",
        transform: "scale(1.1)",
      },
    },
  },
  box: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  listContainer: {
    width: "75%",
    margin: "2.5rem auto",
    textAlign: "justify",
  },
  list: {
    listStyle: "none",
  },
  item: {
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    "& span": {
      borderBottom: "1px solid transparent",
      "&:hover": {
        borderBottom: "1px solid currentColor",
      },
    },
    "&:not(:last-of-type)": {
      marginBottom: "1.05rem",
    },
  },
  itemIcon: {
    color: "#021b79",
  },
});

export default useStyles;
