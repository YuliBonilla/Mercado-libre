import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ImgLogo from "../images/Logo_mercado_libre.png";
import Len from "../images/lens.png";

function SearchBar(props) {
  let history = useHistory();
  const [inputValue, setInputValue] = useState("")
  console.log("prueba", props.location)
  function searchOnEnter(e) {
    if (e.keyCode === "Enter" || e.which == 13) history.push("/items?q=" + inputValue)
  }

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
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => searchOnEnter(e)}
            value={inputValue}
          ></input>
          <Link className="search-bar__button" to={"/items?q=" + inputValue}>
            <img
              className="search-bar__img--lens"
              src={Len}
              alt="Logo_mercado_libre"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
