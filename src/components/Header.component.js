import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { TokenDispatchContext } from "../contexts/token.context";
import {
  IsAuthContext,
  IsAuthDispatchContext,
} from "../contexts/isAuth.context";
import useStyles from "../styles/Header.styles";
import Navigation from "./Navigation.component";
import Login from "./Login.component";
import Reset from "./Reset.component";
import Drawer from "./Drawer.component";

function Header({ history }) {
  const tDispatch = useContext(TokenDispatchContext);
  const isAuth = useContext(IsAuthContext);
  const aDispatch = useContext(IsAuthDispatchContext);

  const classes = useStyles({ isAuth });

  const [show, setShow] = useState(false);
  const [reset, setReset] = useState(false);

  const showLogin = () => setShow(true);
  const hideLogin = () => setShow(false);

  const showReset = () => {
    hideLogin();
    setReset(true);
  };
  const hideReset = () => setReset(false);

  const submit = (input) => {
    fetch("https://www.mapacademyapi.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "error") {
          return alert(data.error);
        }
        tDispatch({ type: "CREATE", token: data.data.token });
        aDispatch({ type: "TOGGLE" });
        window.localStorage.setItem("token", data.data.token);
        window.localStorage.setItem("isAuth", true);
        setShow(!show);
      })
      .catch((err) => console.error(err));
  };
  const submitReset = (input) => {
    fetch("https://www.mapacademyapi.com/api/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "error") {
          return alert(data.error);
        }
        alert(
          "이메일을 확인하세요. 이메일이 오지 않은 경우, 스팸 보관함을 확인하세요."
        );
        hideReset();
      })
      .catch((err) => console.error(err));
  };

  const handleSignout = () => {
    tDispatch({ type: "DELETE" });
    aDispatch({ type: "TOGGLE" });
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("isAuth");
    history.push("/about");
  };

  return (
    <>
      <header className={classes.Header}>
        <div className={classes.container}>
          <Drawer />
          <Link className={classes.logo} to="/about">
            MAP ACADEMY
          </Link>
          <Navigation />
          <button
            className={`${classes.button} ${classes.login}`}
            type="button"
            onClick={showLogin}
          >
            Sign in
          </button>
          <button
            className={`${classes.button} ${classes.signout}`}
            type="button"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      </header>
      <Login
        show={show}
        submit={submit}
        hideLogin={hideLogin}
        showReset={showReset}
      />
      <Reset show={reset} submit={submitReset} hideReset={hideReset} />
    </>
  );
}

export default withRouter(Header);
