import React, { useContext } from "react";
import { getCep } from "../../services/getCep";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./searchComponent.module.css";
import { AppContext } from "../../context/AppContext";

const SearchComponent = () => {
  const { setLoading, cep, setCep, setSearchedCep, setError } =
    useContext(AppContext);

  const search = async () => {
    setLoading(true);
    await getCep(cep)
      .then((response) => {
        setSearchedCep(response);
        setCep("");
        setLoading(false);
      })
      .catch((err) => setError(true));
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
          onChange={(e) => setCep(e.target.value)}
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
