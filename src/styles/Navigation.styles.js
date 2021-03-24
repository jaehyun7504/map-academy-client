import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Navigation: {
    width: "33.33%",
    marginLeft: "-9rem",
    [sizes.down("md")]: {
      display: "none",
    },
  },
  list: {
    listStyle: "none",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#f5f5f7",
    opacity: "0.8",
    transition: "opacity 0.1s ease-out",
    cursor: "pointer",
  },
  linkActive: {
    opacity: "0.9",
  },
});

export default useStyles;
