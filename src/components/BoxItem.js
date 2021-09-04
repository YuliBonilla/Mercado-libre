import React from "react";
import ImgLogo from "../images/Logo_mercado_libre.png";

function BoxItem(props) {
  return (
    <div className="Box-item__container">
      <img className="Box-item__image" src={ImgLogo} alt="item" />
      <div className="Box-item__container--detail">
        <div className="Box-item__price">$ 1.980</div>
        <div className="Box-item__location">Capital Federal</div>
        <div className="Box-item__detail">
          Apple Ipod Touch 5g 16gb Negro Igual A Nuevo completo Unico
        </div>
      </div>
      <div className="Box-item__vl"></div>
    </div>
  );
}
export default BoxItem;
