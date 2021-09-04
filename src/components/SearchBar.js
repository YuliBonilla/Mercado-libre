import React from "react";
import ImgLogo from "../images/Logo_mercado_libre.png";
import Len from "../images/lens.png";

function SearchBar(props) {
  return (
    <div className="search-bar__container">
      <div className="search-bar__box">
        <img
          className="search-bar__img--logo"
          src={ImgLogo}
          alt="Logo_mercado_libre"
        />
        <div className="search-bar__box-input-search">
          <input
            className="search-bar__input"
            placeholder="Nunca dejes de buscar"
          ></input>
          <button className="search-bar__button">
            <img
              className="search-bar__img--lens"
              src={Len}
              alt="Logo_mercado_libre"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
