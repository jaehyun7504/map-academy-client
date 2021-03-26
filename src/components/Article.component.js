import React, { useState, useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { nanoid } from "nanoid";
import useStyles from "../styles/Doc.styles";
import Loader from "./Loader.component";
import Footer from "./Footer.component";

const IMAGE_URL = "https://mapacademy.s3.ap-northeast-2.amazonaws.com/";

function Article({ match }) {
  const classes = useStyles();
  const [article, setArticle] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://www.mapacademyapi.com/api/articles/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "error") {
          return setArticle({ isError: true });
        }
        setArticle({
          title: data.data.title,
          body: data.data.body,
          imageUrl: data.data.imageUrl,
        });
        setLoader(false);
      });
  }, [match.params.id]);

  if (article.isError) {
    return <Redirect to="/about" />;
  }

  let content = <Loader />;
  if (!loader) {
    const bodyArr = article.body.split("\r\n");
    const body = bodyArr.map((sentence, i) => (
      <p className={classes.body} key={nanoid(12)}>
        {sentence ? sentence : <span className={classes.lineBreak} />}
      </p>
    ));
    const image = article.imageUrl ? (
      <img
        className={classes.image}
        src={`${IMAGE_URL}${article.imageUrl}`}
        alt={article.title}
      />
    ) : null;
    content = (
      <Fragment>
        <h1 className={classes.title}>{article.title}</h1>
        <p></p>
        <hr className={classes.horizon} />
        {body}
        {image}
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

export default Article;
