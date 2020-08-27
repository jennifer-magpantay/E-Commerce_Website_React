import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Checkout from "./components/Checkout";
import ErrorPage from "./components/ErrorPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* adding routes for each page/screen */}
      <Route path="/" exact component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
