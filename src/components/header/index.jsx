import styles from "./header.module.css";

import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Point me cover logo" />
    </Link>

    <nav>
      <Link to="/search" className={styles.link}>
        <SearchIcon className={styles.icon} />
        Buscar CEP
      </Link>
      <Link to="/fav" className={styles.link}>
        <FavoriteBorderIcon className={styles.icon} />
        favoritos
      </Link>
    </nav>
  </header>
);

export default Header;
