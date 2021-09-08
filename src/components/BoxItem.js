import React from "react";
import { Link } from "react-router-dom"

function BoxItem(props) {
  const { img, price, location, name, dataItem } = props

  return (
    <Link className="Box-item__container" to={"/itemsID?q=" + dataItem.id}>
      <img className="Box-item__image" src={img} alt="item" />
      <div className="Box-item__container--detail">
        <div className="Box-item__price">${price}</div>
        <div className="Box-item__location">{location}</div>
        <div className="Box-item__detail">
          {name}
        </div>
      </div>
      <div className="Box-item__vl"></div>
    </Link>
  );
}
export default BoxItem;
