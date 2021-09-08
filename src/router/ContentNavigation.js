import React from "react";
import { Switch, Route } from "react-router-dom";
import ResultsSearch from "../pages/ResultsSearch";
import DetailItem from "../pages/DetailItem";

function ContentNavigation(props) {
  
  return (
    <Switch>
      <Route path="/itemsID" component={DetailItem} />
      <Route path="/items" component={ResultsSearch} />
    </Switch>
  );
}

export default ContentNavigation;
