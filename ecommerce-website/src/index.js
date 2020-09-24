import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../src/style/reset.css";
import "../src/style/index.css";
import App from "./App";
import Home from './components/Main/Home';
import SignUp from "./components/SignIn/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Checkout from "./components/Main/Checkout";
import ErrorPage from "./components/Main/ErrorPage";
import ProductPage from './components/Products/ProductPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* adding routes for each page/screen */}
      <Route path="/" exact component={App} />
      <Route path="/home" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/checkout" exact component={Checkout} />
      {/* <Route path="/home/productpage" exact component={ProductPage} />       */}
      <Route path="home/:slug" exact component={ProductPage} />
      <Route path="/" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);