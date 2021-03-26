import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Edit: {
    width: "100%",
    paddingTop: "4.4rem",
  },
  form: {
    width: "90%",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    width: "100%",
    margin: "2rem 0",
    padding: "1rem",
    fontSize: "16px",
  },
  body: {
    resize: "none",
    width: "100%",
    height: "60vh",
    marginBottom: "2rem",
    padding: "1rem",
    fontFamily: "NanumBarunGothic, sans-serif",
    fontSize: "16px",
  },
  image: {
    display: "block",
    margin: "0 auto 2rem",
  },
  button: {
    padding: "0.6rem 1rem",
    backgroundImage: "linear-gradient(to bottom, #0575e6, #021b79)",
    border: "0",
    borderRadius: "3px",
    fontSize: "1.35rem",
    color: "#f5f5f7",
    opacity: "0.9",
    outline: "none",
    cursor: "pointer",
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
