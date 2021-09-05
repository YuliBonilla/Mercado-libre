import React from "react";
import BoxItem from "../components/BoxItem";

function Home() {

  function getItemsProducts() {
    fetch(
      "http://localhost:3000/?q=pantalon"
    )
      .then((response) => response.json())
      .then((dataJson) => {
        let data = dataJson.items.map((item) => {
          return <BoxItem price={item.amount} location="" name={item.title} dataItem={item}/>
        })
        return data
      })
  }

  return (
    <React.Fragment>
      {getItemsProducts()}
    </React.Fragment>
  );
}

export default Home;
