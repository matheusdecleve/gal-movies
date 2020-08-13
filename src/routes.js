import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/movie/:id" component={MovieInfo}></Route>
      </Switch>
    </BrowserRouter>
  );
}
