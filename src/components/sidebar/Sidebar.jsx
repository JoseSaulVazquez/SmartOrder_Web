import React, { useState } from "react";
import styles from "./sidebar.module.css";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

function Sidebar() {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const open = () => setActive(true);
  const close = () => setActive(false);

  return (
    <div
      className={classNames(
        styles.sidebar,
        active ? styles.open : styles.close
      )}
    >
      <div className={styles.title}>
        <div className={styles.subtitle}>
          <button className={styles.imageContainer} onClick={open}>
            <img src={Logo} alt="SmartOrder Logo" />
          </button>
          <h3>SmartOrder</h3>
        </div>

        <button
          className={styles.closeButton}
          title="Cerrar menú"
          onClick={close}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <menu className={styles.menu}>
        <ul className={styles.menuList}>
          <li title="Dashboard">
            <span className={styles.icon}>
              <i className="fa-solid fa-house"></i>
            </span>
            <span className={styles.text}>Dashboard</span>
          </li>
          <li title="Mis Restaurantes">
            <span className={styles.icon}>
              <i className="fa-solid fa-utensils"></i>
            </span>
            <span className={styles.text}>Mis Restaurantes</span>
          </li>
          <li title="Gestión de Menús">
            <span className={styles.icon}>
              <i className="fa-solid fa-box"></i>
            </span>
            <span className={styles.text}>Gestión de Menús</span>
          </li>
          <li title="Pedidos">
            <span className={styles.icon}>
              <i className="fa-solid fa-list"></i>
            </span>
            <span className={styles.text}>Pedidos</span>
          </li>
          <li title="Configuración">
            <span className={styles.icon}>
              <i className="fa-solid fa-gear"></i>
            </span>
            <span className={styles.text}>Configuración</span>
          </li>
          <li title="Reportes">
            <span className={styles.icon}>
              <i className="fa-solid fa-file"></i>
            </span>
            <span className={styles.text}>Reportes y estadísticas</span>
          </li>
        </ul>

        <div>
          <button
            type="button"
            className={styles.logout_button}
            onClick={Logout}
            title="Cerrar Sesión"
          >
            <span className={styles.icon}>
              <i className="fa-solid fa-right-from-bracket"></i>
            </span>
            <span className={styles.text}>Cerrar sesión</span>
          </button>
        </div>
      </menu>
    </div>
  );
}

export default Sidebar;
