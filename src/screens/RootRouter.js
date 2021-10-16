import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainScreen, DetailsScreen } from "./index";
import { CONTENT_TYPES } from "../helpers";

function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainScreen />
        </Route>
        <Route path="/people/:id">
          <DetailsScreen type={CONTENT_TYPES.PEOPLE} />
        </Route>
        <Route path="/planets/:id">
          <DetailsScreen type={CONTENT_TYPES.PLANETS} />
        </Route>
        <Route path="/starships/:id">
          <DetailsScreen type={CONTENT_TYPES.STARSHIPS} />
        </Route>
      </Switch>
    </Router>
  );
}

export default RootRouter;
