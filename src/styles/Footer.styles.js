import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Footer: {
    padding: "3rem 0",
    textAlign: "center",
    fontSize: "1.4rem",
    fontWeight: "300",
    lineHeight: "2.2rem",
    "& span": {
      fontWeight: "400",
    },
    [sizes.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
});

export default useStyles;
