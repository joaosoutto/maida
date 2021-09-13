import React, { useContext } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import styles from "./cepCard.module.css";
import { AppContext } from "../../context/AppContext";
import { useHistory } from "react-router";

const CepCard = ({ favorite }) => {
  const history = useHistory();

  const { favorites } = useContext(AppContext);

  const cardIndex = favorites.indexOf(favorite);
  const removeCep = () => {
    favorites.splice(cardIndex, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    history.push("/fav");
  };
  return (
    <div className={styles.wrapper}>
      <h5>{favorite.cep}</h5>
      <h5>
        {favorite.logradouro} - {favorite.bairro}
      </h5>
      <h5>
        {favorite.cidade} / {favorite.estado}
      </h5>
      <button onClick={() => removeCep()} className={styles.clear}>
        <DeleteForeverIcon />
        Remover
      </button>
    </div>
  );
};

export default CepCard;
