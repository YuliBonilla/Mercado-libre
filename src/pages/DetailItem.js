import React from "react";
import ImgLogo from "../images/Logo_mercado_libre.png";

function DetailItem(props) {
  return (
    <div className="detail-item__container">
      <img className="detail-item__img" src={ImgLogo} alt="img" />
      <div className="detail-item__container--detail">
        <div className="detail-item__sub-title">Nuevo - 234 vendidos</div>
        <div className="detail-item__title">Deco Reverse Sombrero Oxford</div>
        <div className="detail-item__price">$ 1.980</div>
        <button className="detail-item__button-buy">Comprar</button>
      </div>
      <div className="detail-item__description-title">Descrcipcion del producto</div>
      <div className="detail-item__description">
        Una prueba viral analiza muestras de su nariz o su boca para detectar
        una infección actual por el el virus que causa el COVID-19. Las pruebas
        virales se pueden realizar en un laboratorio, en un centro de pruebas o
        en casa o en cualquier otro lugar. Se utilizan dos tipos de pruebas
        virales: pruebas de amplificación de ácido nucleico (NAAT) y pruebas de
        antígeno. Una prueba viral analiza muestras de su nariz o su boca para
        detectar una infección actual por el el virus que causa el COVID-19. Las
        pruebas virales se pueden realizar en un laboratorio, en un centro de
        pruebas o en casa o en cualquier otro lugar. Se utilizan dos tipos de
        pruebas virales: pruebas de amplificación de ácido nucleico (NAAT) y
        pruebas de antígeno. Una prueba viral analiza muestras de su nariz o su
        boca para detectar una infección actual por el el virus que causa el
        COVID-19. Las pruebas virales se pueden realizar en un laboratorio, en
        un centro de pruebas o en casa o en cualquier otro lugar. Se utilizan
        dos tipos de pruebas virales: pruebas de amplificación de ácido nucleico
        (NAAT) y pruebas de antígeno. Una prueba viral analiza muestras de su
        nariz o su boca para detectar una infección actual por el el virus que
        causa el COVID-19. Las pruebas virales se pueden realizar en un
        laboratorio, en un centro de pruebas o en casa o en cualquier otro
        lugar. Se utilizan dos tipos de pruebas virales: pruebas de
        amplificación de ácido nucleico (NAAT) y pruebas de antígeno.
      </div>
    </div>
  );
}

export default DetailItem;
