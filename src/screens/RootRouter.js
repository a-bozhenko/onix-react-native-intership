import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainScreen, ListOfItems, DetailsScreen } from "./index";
import { CONTENT_TYPES } from "../helpers";

function RootRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainScreen />
        </Route>
        <Route path="/people">
          <ListOfItems type={CONTENT_TYPES.PEOPLE} />
        </Route>
        <Route path="/planets">
          <ListOfItems type={CONTENT_TYPES.PLANETS} />
        </Route>
        <Route path="/starships">
          <ListOfItems type={CONTENT_TYPES.STARSHIPS} />
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
