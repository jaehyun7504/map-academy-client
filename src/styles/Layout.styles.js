import { makeStyles } from "@material-ui/styles";
import sizes from "./_sizes";

const useStyles = makeStyles({
  Layout: {
    maxWidth: "1366px",
    margin: "0 auto",
    [sizes.down("md")]: {
      padding: "0 2rem",
    },
  },
});

export default useStyles;
