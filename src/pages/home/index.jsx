import React from "react";
import styles from "./home.module.css";

import gif from "../../assets/gif.gif";

const Home = () => (
  <section className={`${styles.secPadding} animeLeft`}>
    <div className={styles.welcome}>
      <h1>
        Bem Vindo ao <span>Point Me!</span>
      </h1>
      <p>
        Com nosso aplicativo, você será capaz de pesquisar o endereço das suas
        localidades favoritas pelo CEP!{" "}
      </p>
      <p>
        Além de salvar seus CEP'p favoritos, você também poderá consultar as
        localidades em um mapa em tempo real!
      </p>
      <p>
        Se estiver perdido, se estiver procurando por algo ou, simplesmente,
        gostaria de passar um tempo, você está no lugar certo!
      </p>
      <h3>
        Então não perca tempo e <span>Point Me!</span>
      </h3>
    </div>
    <div className={styles.gifDiv}>
      <img
        className={styles.gif}
        src={gif}
        alt="globo do mundo com um aviao sobrevoando"
      />
    </div>
  </section>
);

export default Home;
