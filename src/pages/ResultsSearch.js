import React, { useState, useEffect } from "react";
import queryString from "query-string";
import BoxItem from "../components/BoxItem";
import BreadCrumb from "../components/BreadCrumb";

function ResultsSearch(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const parsed = queryString.parse(props.location.search);
    fetch("http://localhost:3000/api?q=" + parsed.q)
      .then((response) => response.json())
      .then((dataJson) => {
        setData(dataJson.data);
      });
  }, [props.location]);

  return (
    <React.Fragment>
      {data.length != 0 && <BreadCrumb data={data} />}
      <div className="body__container">
        {data.length != 0 && data.items.map((item) => {
          return (
            <BoxItem
              key={item.id}
              price={item.price.amount}
              img={item.picture}
              location={item.address}
              name={item.title}
              dataItem={item}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ResultsSearch;
