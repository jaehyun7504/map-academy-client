import React, { useState, useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { nanoid } from "nanoid";
import useStyles from "../styles/Doc.styles";
import Loader from "./Loader.component";
import Footer from "./Footer.component";

function Notice({ match }) {
  const classes = useStyles();
  const [notice, setNotice] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://www.mapacademyapi.com/api/notices/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "error") {
          return setNotice({ isError: true });
        }
        setNotice({
          title: data.data.title,
          body: data.data.body,
        });
        setLoader(false);
      });
  }, [match.params.id]);

  if (notice.isError) {
    return <Redirect to="/about" />;
  }

  let content = <Loader />;
  if (!loader) {
    const bodyArr = notice.body.split("\r\n");
    const body = bodyArr.map((sentence, i) => (
      <p className={classes.body} key={nanoid(12)}>
        {sentence ? sentence : <span className={classes.lineBreak} />}
      </p>
    ));
    content = (
      <Fragment>
        <h1 className={classes.title}>{notice.title}</h1>
        <hr className={classes.horizon} />
        {body}
      </Fragment>
    );
  }

  return (
    <div className={classes.Doc}>
      <div className={classes.container}>{content}</div>
      <Footer />
    </div>
  );
}

export default Notice;
