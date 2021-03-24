import React from "react";
import useStyles from "../styles/Footer.styles";

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.Footer}>
      주소&#58; <span>경기도 오산시 궐리사로 71 2층</span> &#124; 전화번호:{" "}
      <span>031&#45;376&#45;7326</span>
      <br />
      Copyright &copy; 2021 Map Academy. All rights reserved.
    </footer>
  );
}

export default Footer;
