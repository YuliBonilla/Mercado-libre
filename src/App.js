import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Main from "./router/Navigation";

function App() {
  return (
    <Router>
      <SearchBar searchItem={searchItem} />
      <div className="body__container">
        <Main />
      </div>
    </Router>
  );
}

export default App;
