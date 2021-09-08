import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Main from "./router/Navigation";

function App() {
  const [data, setData] = useState([])
  return (
    <Router>
      <SearchBar searchItem={searchItem} />
      <div className="body__container">
        <Main data={data} />
      </div>
    </Router>
  );
}

export default App;
