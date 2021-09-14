import React, { useContext, useEffect } from "react";

import BackspaceIcon from "@material-ui/icons/Backspace";
import FavoriteIcon from "@material-ui/icons/Favorite";

import styles from "./result.module.css";
import { AppContext } from "../../context/AppContext";

const Result = () => {
  const { loading, searchedCep, setSearchedCep, setFavorites, favorites, notFound } =
    useContext(AppContext);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const clearSearch = () => {
    setSearchedCep({});
  };

  const setFavorite = () => {
    if (favorites.some((cep) => cep.cep === searchedCep.cep)) {
      alert(`Seu CEP ${searchedCep.cep} já é favorito!`);
      return;
    }
    setFavorites([
      ...favorites,
      {
        cep: searchedCep.cep,
        logradouro: searchedCep.logradouro,
        bairro: searchedCep.bairro,
        cidade: searchedCep.localidade,
        estado: searchedCep.uf,
      },
    ]);

    alert(`Seu CEP ${searchedCep.cep} foi adicionado aos favoritos!`);
    setSearchedCep({});
  };

  return (
    <div className={styles.result}>
      {loading ? (
        <p>Carregando...</p>
      ) : notFound ? <p className={styles.cepNotFound}>Cep não encontrado! Tente novamente.</p> : searchedCep.cep ? (
        <>
          <h4>CEP: {searchedCep && searchedCep.cep}</h4>
          <h4>Logradouro: {searchedCep.logradouro}</h4>
          <h4>Bairro: {searchedCep.bairro}</h4>
          <h4>Cidade: {searchedCep.localidade}</h4>
          <h4>Estado: {searchedCep.uf}</h4>
        </>
      ) : null}
      {searchedCep.cep ? (
        <div className={styles.buttons}>
          <button onClick={clearSearch} className={styles.clear}>
            Limpar Busca
            <BackspaceIcon style={{ fontSize: "30px", marginLeft: "10px" }} />
          </button>
          <button onClick={() => setFavorite()} className={styles.save}>
            Favoritar CEP
            <FavoriteIcon style={{ fontSize: "30px", marginLeft: "10px" }} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Result;
