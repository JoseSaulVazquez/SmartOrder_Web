import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

function Sidebar({ setSidebarOpen }) {
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
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
          <button
            className={styles.imageContainer}
            onClick={() => {
              open(), setSidebarOpen(true);
            }}
          >
            <img src={Logo} alt="SmartOrder Logo" />
          </button>
          <h3>SmartOrder</h3>
        </div>

        <button
          className={styles.closeButton}
          title="Cerrar menú"
          onClick={() => {
            close();
            setSidebarOpen(false);
          }}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <menu className={styles.menu}>
        <ul className={styles.menuList}>
          <Link to="/admin/menu-management" className={styles.a}>
            <li title="Dashboard" className={styles.active}>
              <span className={styles.icon}>
                <i className="fa-solid fa-house"></i>
              </span>
              <span className={styles.text}>Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/restaurants" className={styles.a}>
            <li title="Mis Restaurantes">
              <span className={styles.icon}>
                <i className="fa-solid fa-utensils"></i>
              </span>
              <span className={styles.text}>Mis Restaurantes</span>
            </li>
          </Link>
          {/* <Link to="/admin/restaurants" className={styles.a}>
            <li title="Gestión de Menús">
              <span className={styles.icon}>
                <i className="fa-solid fa-box"></i>
              </span>
              <span className={styles.text}>Gestión de Menús</span>
            </li>
          </Link> */}
          <Link to="/admin/foods" className={styles.a}>
            <li title="Pedidos">
              <span className={styles.icon}>
                <i className="fa-solid fa-burger"></i>
              </span>
              <span className={styles.text}>Alimentos</span>
            </li>
          </Link>
          <Link to="/admin/orders" className={styles.a}>
            <li title="Pedidos">
              <span className={styles.icon}>
                <i className="fa-solid fa-list"></i>
              </span>
              <span className={styles.text}>Pedidos</span>
            </li>
          </Link>
          {/* <Link to="/admin/restaurants" className={styles.a}>
            <li title="Configuración">
              <span className={styles.icon}>
                <i className="fa-solid fa-gear"></i>
              </span>
              <span className={styles.text}>Configuración</span>
            </li>
          </Link> */}
          <Link to="/admin/reports" className={styles.a}>
            <li title="Reportes">
              <span className={styles.icon}>
                <i className="fa-solid fa-file"></i>
              </span>
              <span className={styles.text}>Reportes y estadísticas</span>
            </li>
          </Link>
          <Link to="/admin/users" className={styles.a}>
            <li title="Usuarios">
              <span className={styles.icon}>
                <i className="fa-solid fa-user"></i>
              </span>
              <span className={styles.text}>Usuarios</span>
            </li>
          </Link>
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
