import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo y descripción */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={Logo} alt="smartOrder_logo" />
              <h2 className={styles.title}>smartOrder</h2>
            </div>

            <p className={styles.subtitle}>
              la forma inteligente de organizar tu restaurante.
            </p>
          </div>

          {/* Menú de enlaces */}
          <div className={styles.links}>
            <Link to="/smartOrder">Menú</Link>
            <Link to="/reservas">Reservas</Link>
            <Link to="/contact">Sobre nosotros</Link>
            <Link to="/contact">Contacto</Link>
          </div>

          {/* Redes Sociales */}
          <div className={styles.links}>
            <Link to="">
              <FontAwesomeIcon icon={faFacebook} />
              <span> Facebook</span>
            </Link>
            <Link>
              <FontAwesomeIcon icon={faInstagram} />
              <span> Instagram</span>
            </Link>
            <Link>
              <FontAwesomeIcon icon={faSquareXTwitter} />
              <span> Twitter</span>
            </Link>
          </div>
        </div>

        <div className={styles.separator}></div>


        {/* Derechos de autor */}
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} smartOrder. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
