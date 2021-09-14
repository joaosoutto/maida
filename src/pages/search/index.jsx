import React, { useEffect, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./search.module.css";



import { AppContext } from "../../context/AppContext";

import SearchComponent from "../../components/searchComponent";
import Result from "../../components/result";
import Mapa, { MyMap } from "../../components/Map/Mapa";

const Search = () => {
  const { setSearchedCep } = useContext(AppContext);
  useEffect(() => {
    setSearchedCep({});
  }, []);



  return (
    <section className="sec animeLeft">
      <div className="left">
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
      <div className="right">
        <MyMap />
      </div>
    </section>
  );
};

export default Search;
