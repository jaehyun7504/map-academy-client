import React, { useContext, useState, useEffect } from "react";
import { TokenContext } from "../contexts/token.context";
import useStyles from "../styles/Edit.styles";

function Edit({ hasImage, isUpdating, match, history }) {
  const token = useContext(TokenContext);

  const classes = useStyles();

  const [state, setState] = useState({
    title: "",
    body: "",
    image: "",
  });
  const content = !hasImage ? "notices" : "articles";

  useEffect(() => {
    if (isUpdating) {
      fetch(`https://www.mapacademyapi.com/api/${content}/${match.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setState({
            title: data.data.title,
            body: data.data.body,
          });
        })
        .catch((err) => console.error(err));
    }
  }, [isUpdating, content, match.params.id]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setState({ ...state, image: e.target.files[0] });
  };

  const editContent = (formData) => {
    fetch(
      `https://www.mapacademyapi.com/api/${content}/${
        isUpdating ? match.params.id : ""
      }`,
      {
        method: !isUpdating ? "POST" : "PATCH",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      }
    )
      .then((res) => {
        setState({
          title: "",
          body: "",
        });
        if (hasImage) {
          setState({ ...state, image: null });
          document.getElementById("image").value = "";
        }
        history.push(`/${content}`);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.title || !state.body) {
      return alert("내용을 입력해 주세요.");
    }
    const formData = new FormData();
    formData.append("title", state.title);
    formData.append("body", state.body);
    if (hasImage && state.image) {
      formData.append("image", state.image, state.image.name);
    }
    editContent(formData);
  };

  const imageInput = hasImage ? (
    <input
      id="image"
      className={classes.image}
      type="file"
      onChange={handleFileChange}
    />
  ) : null;

  return (
    <div className={classes.Edit}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.title}
          type="text"
          name="title"
          value={state.title}
          placeholder="제목을 입력하세요."
          onChange={handleChange}
        />
        <textarea
          className={classes.body}
          type="text"
          name="body"
          value={state.body}
          placeholder="본문을 입력하세요."
          onChange={handleChange}
        />
        {imageInput}
        <button className={classes.button} type="submit">
          확인
        </button>
      </form>
    </div>
  );
}

export default Edit;
