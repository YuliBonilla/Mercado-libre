import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailItem from "../pages/DetailItem";

function Main(props) {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/detailItem" component={DetailItem} />
    </React.Fragment>
  );
}

export default Main;
