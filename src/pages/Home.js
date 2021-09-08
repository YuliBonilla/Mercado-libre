import React from "react";
import SearchBar from "../components/SearchBar";
import ContentNavigation from "../router/ContentNavigation"

function Home(props) {

  return (
    <React.Fragment>
      <SearchBar />
      <ContentNavigation />
    </React.Fragment>
  );
}

export default Home;
