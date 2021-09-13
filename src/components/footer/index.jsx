import styles from "./footer.module.css";

import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <nav>
      <Link to="/search" className={styles.link}>
        <SearchIcon className={styles.icon} style={{fill: 'rgb(56, 181, 83)', fontSize: '30px'}} />
        Buscar CEP
      </Link>
      <Link to="/fav" className={styles.link}>
        <FavoriteBorderIcon className={styles.icon} style={{fill: 'rgb(56, 181, 83)', fontSize: '30px'}} />
        favoritos
      </Link>
    </nav>
  </footer>
);

export default Footer;
