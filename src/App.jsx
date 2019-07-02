import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Views
import LandingPage from "./views/LandingPage";

// CSS
import "./css/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

const appDiv = document.getElementById("app");

render(<App />, appDiv);
