import React, { useContext, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styles from "./fav.module.css";
import { AppContext } from "../../context/AppContext";
import CepCard from "../../components/cepCard";
import Mapa, { MyMap } from "../../components/Map/Mapa";


const Fav = () => {
  const { favorites, setFavorites } = useContext(AppContext);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
    console.log(favorites);
  }, []);

  return (
    <section className={styles.sec}>
      <div className={styles.left}>
        <h1>
          <FavoriteIcon
            style={{
              fill: "rgb(40,40,40)",
              fontSize: "30px",
              marginRight: "10px",
            }}
          />
          Favoritos
        </h1>
        <div className={styles.favorites}>
          {favorites.length > 0 ? (
            <div className={styles.card}>
              {favorites.map((favorite, index) => (
                <CepCard key={index} favorite={favorite} />
              ))}
            </div>
          ) : (
            <h4>Você ainda não possui CEP's favoritos!</h4>
          )}
        </div>
      </div>
      <div className={styles.right}>
        <h1>Mapa</h1>
        <MyMap />

      </div>
    </section>
  );
};

export default Fav;
