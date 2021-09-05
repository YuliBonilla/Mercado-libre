import React from "react";
import ImgLogo from "../images/Logo_mercado_libre.png";

function BoxItem(props) {
  return (
    <div className="Box-item__container">
      <img className="Box-item__image" src={ImgLogo} alt="item" />
      <div className="Box-item__container--detail">
        <div className="Box-item__price">{props.price}</div>
        <div className="Box-item__location">{props.location}</div>
        <div className="Box-item__detail">
          {props.name}
        </div>
      </div>
      <div className="Box-item__vl"></div>
    </div>
  );
}
export default BoxItem;
