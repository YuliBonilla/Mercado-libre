import React, { useEffect, useState } from "react";
import queryString from "query-string";

//No se encontro como obtener del servicio de detalle la data para el breadcrumb
function DetailItem(props) {
  const [data, setData] = useState({
    title: "",
    price: { amount: "" },
    description: "",
    picture: [{ url: "" }],
  });

  useEffect(() => {
    const parsed = queryString.parse(props.location.search);
    fetch("http://localhost:3000/api/detailItem?id=" + parsed.q)
      .then((response) => response.json())
      .then((dataJson) => {
        setData(dataJson.data.data.item);
      });
  }, []);

  return (
    <div className="detail-item__container">
      <div className="detail-item__container--img-price">
        <img className="detail-item__img" src={data.picture[0].url} alt="img" />
        <div className="detail-item__container--detail">
          <div className="detail-item__sub-title">{data.title}</div>
          <div className="detail-item__title">{data.title}</div>
          <div className="detail-item__price">${data.price.amount}</div>
          <button className="detail-item__button-buy">Comprar</button>
        </div>
      </div>
      <div className="detail-item__description-title">
        Descripción del producto
      </div>
      <div className="detail-item__description">{data.description}</div>
    </div>
  );
}

export default DetailItem;
