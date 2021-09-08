import React, { useEffect, useState } from "react";
import queryString from "query-string"

function DetailItem(props) {
  const [data, setData] = useState({ title: "", price: { amount: "" }, description: "", picture: [{ url: "" }] })
  console.log("props", props)

  useEffect(() => {
    const parsed = queryString.parse(props.location.search);
    fetch(
      "http://localhost:3000/api/detailItem?id=" + parsed.q
    )
      .then((response) => response.json())
      .then((dataJson) => {
        console.log("dataJson", dataJson)
        setData(dataJson.data.data.item)
      })
  }, [])

  return (
    <div className="detail-item__container">
      <img className="detail-item__img" src={data.picture[0].url} alt="img" />
      <div className="detail-item__container--detail">
        <div className="detail-item__sub-title">{data.title}</div>
        <div className="detail-item__title">{data.title}</div>
        <div className="detail-item__price">{data.price.amount}</div>
        <button className="detail-item__button-buy">Comprar</button>
      </div>
      <div className="detail-item__description-title">Descrcipcion del producto</div>
      <div className="detail-item__description">
        {data.description}
      </div>
    </div>
  );
}

export default DetailItem;
