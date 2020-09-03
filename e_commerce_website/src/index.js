import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from './components/Home';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Checkout from "./components/Checkout";
import ErrorPage from "./components/ErrorPage";
import ProductPage from './components/ProductPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* adding routes for each page/screen */}
      <Route path="/" exact component={App} />
      <Route path="/home" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/home/checkout" exact component={Checkout} />
      <Route path="/home/productpage" exact component={ProductPage} />      
      <Route path="/" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
