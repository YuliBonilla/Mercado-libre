import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";

function Navigation(props) {
  
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default Navigation;
