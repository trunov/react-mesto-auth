import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import logo from "../images/header-logo.svg";

function Header({ email }) {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
      <Switch>
        <Route exact path="/">
          <p className="header__paragraph">{email}</p>
          <Link to="/sign-up" className="header__paragraph ">
            Выйти
          </Link>
        </Route>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__paragraph ">
            {" "}
            Зарегистрироваться
          </Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__paragraph ">
            {" "}
            Войти
          </Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
