import React, { useEffect, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./search.module.css";

import { AppContext } from "../../context/AppContext";

import SearchComponent from "../../components/searchComponent";
import Result from "../../components/result";

const Search = () => {
  const { setSearchedCep } = useContext(AppContext);
  useEffect(() => {
    setSearchedCep({});
  }, []);

  return (
    <section className={styles.sec}>
      <div className={styles.left}>
        <h1>
          <SearchIcon
            style={{
              fill: "rgb(40,40,40)",
              fontSize: "40px",
              marginRight: "10px",
            }}
          />
          Buscar
        </h1>
        <div className={styles.search}>
          <SearchComponent />
          <Result />
        </div>
      </div>
      <div className={styles.right}>
        <h1>Mapa</h1>
      </div>
    </section>
  );
};

export default Search;
