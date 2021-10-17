import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainScreen, DetailsScreen } from "./index";
import { CONTENT_TYPES } from "../helpers";

function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>

        <Route exact path="/films/:id">
          <DetailsScreen type={CONTENT_TYPES.FILMS} />
        </Route>
        <Route exact path="/species/:id">
          <DetailsScreen type={CONTENT_TYPES.SPECIES} />
        </Route>
        <Route exact path="/vehicles/:id">
          <DetailsScreen type={CONTENT_TYPES.VEHICLES} />
        </Route>
        <Route exact path="/people/:id">
          <DetailsScreen type={CONTENT_TYPES.PEOPLE} />
        </Route>
        <Route exact path="/planets/:id">
          <DetailsScreen type={CONTENT_TYPES.PLANETS} />
        </Route>
        <Route exact path="/starships/:id">
          <DetailsScreen type={CONTENT_TYPES.STARSHIPS} />
        </Route>
      </Switch>
    </Router>
  );
}

export default RootRouter;
