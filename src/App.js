import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import BreadCrumb from "./components/BreadCrumb";
import Main from "./router/Main";

function App() {
  return (
    <Router>
      <SearchBar />
      <BreadCrumb />
      <div className="body__container">
        <Main />
      </div>
    </Router>
  );
}

export default App;
