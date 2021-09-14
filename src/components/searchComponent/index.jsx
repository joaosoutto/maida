import React, { useContext, useState } from "react";
import { getCep } from "../../services/getCep";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./searchComponent.module.css";
import { AppContext } from "../../context/AppContext";

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const SearchComponent = () => {
  const { setLoading, cep, setCep, setSearchedCep, setError, setNotFound } =
    useContext(AppContext);

  

  const search = async () => {
    setLoading(true);
    setNotFound(false)
    await getCep(cep)
      .then((response) => {
        setSearchedCep(response);
        if(response.erro) {
          setNotFound(true)
        }
        setCep("");
        setLoading(false);
      })
      .catch((err) => setError(true));
  };

  const handleChange = (e) => {
    if (/\D/.test(e.target.value)) {
      return;
    }
    setCep(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="search">Digite seu CEP:</label>
      <div>
        <input
          className={styles.input}
          type="text"
          id="search"
          value={cep}
          placeholder="ex: 31200-600"
          onChange={(e) => handleChange(e)}
          maxLength="8"
        />
        <button
          disabled={cep.length < 8 ? true : false}
          className={cep.length < 8 ? styles.buttonD : styles.button}
          onClick={search}
        >
          <SearchIcon style={{ fill: "rgb(250,250,250)", fontSize: "48px" }} />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
