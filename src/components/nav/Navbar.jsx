import React, { use, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./nav.module.css";
import classNames from "classnames";
import Logo from "../../assets/Logo.png";
import { userData } from "../../utils/Users";

function Navbar() {
  const location = useLocation().pathname;
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState("absolute");
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const userDataResponse = await userData(token);
          setUser(userDataResponse);
        }
      } catch (error) {
        console.log("Error inesperado: " + error);
      }
    };

    fetchUser();
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > window.innerHeight) {
        if (scrollPos > currentScrollPos) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      if (currentScrollPos < 700) {
        setPosition("absolute");
      } else {
        setPosition("fixed");
      }
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  const options = !(location.split("/")[1] === "smartOrder");
  const active = location.split("/")[1];
  const active2 = location.split("/")[2];
  const admin = location.split("/")[1] === "admin";

  const headerStyle =
    location === "/"
      ? styles.specialHeader
      : options
      ? styles.fix
      : styles.normalHeader;

  // console.log(user.email);

  return (
    <header
      className={classNames(
        styles.header,
        headerStyle,
        {
          [styles.hiddenNav]:
            !isVisible && headerStyle === styles.specialHeader,
        },
        {
          [styles.abs]:
            position === "absolute" && headerStyle === styles.specialHeader,
          [styles.fix]:
            position === "fixed" && headerStyle === styles.specialHeader,
        }
      )}
    >
      <nav className={styles.navbar}>
        <div className={styles.left_section}>
          <Link className={styles.logo} to="/">
            {!(location === "/") && <img src={Logo} alt="smartOrder Logo" />}
            <h1 className={options ? styles.homeSmart : styles.smartOrder}>
              SmartOrder
            </h1>
          </Link>

          {/* <h1 className={styles.title}>PEDIDO</h1> */}
        </div>

        {/* BOTÓN HAMBURGUESA SOLO MÓVIL */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? styles.line1Active : styles.line}></span>
          <span className={menuOpen ? styles.line2Active : styles.line}></span>
          <span className={menuOpen ? styles.line3Active : styles.line}></span>
        </div>

        <div
          className={`${styles.right_section} ${menuOpen ? styles.open : ""}`}
        >
          {options && (
            <>
              <Link
                to="/"
                className={classNames(
                  styles.homeLink,
                  !active ? styles.active : ""
                )}
              >
                Inicio
              </Link>
              <Link
                to="/app"
                className={classNames(
                  styles.homeLink,
                  active === "app" ? styles.active : ""
                )}
              >
                App
              </Link>
              <Link
                to="/features"
                className={classNames(
                  styles.homeLink,
                  active === "features" ? styles.active : ""
                )}
              >
                Caracteristicas
              </Link>
              <Link
                to="/shop"
                className={classNames(
                  styles.homeLink,
                  active === "shop" ? styles.active : ""
                )}
              >
                Comprar
              </Link>
              <Link
                to="/help"
                className={classNames(
                  styles.homeLink,
                  active === "help" ? styles.active : ""
                )}
              >
                Sobre nosotros
              </Link>
              {/* <Link
                to="/about"
                className={classNames(
                  styles.homeLink,
                  active === "cart" ? styles.active : ""
                )}
              >
                <span className="material-symbols-outlined">shopping_cart</span>
              </Link> */}
              {!user && (
                <Link to="/login" className={styles.homeLink}>
                  Iniciar sesión
                </Link>
              )}
              {user && (
                <Link to="/login" className={styles.homeLink}>
                  {user.name.name}
                </Link>
              )}
            </>
          )}

          {!options && (
            <>
              <Link
                to="/order"
                className={classNames(
                  styles.smartOrder_Link,
                  active2 === "order" ? styles.active : ""
                )}
              >
                Restaurantes
              </Link>
              <Link
                to="/order"
                className={classNames(
                  styles.smartOrder_Link,
                  active2 === "order" ? styles.active : ""
                )}
              >
                Reservaciones
              </Link>
              <Link
                to="/menu"
                className={classNames(
                  styles.smartOrder_Link,
                  active2 === "menu" ? styles.active : ""
                )}
              >
                Menú
              </Link>
              <Link
                to="/order"
                className={classNames(
                  styles.smartOrder_Link,
                  active2 === "order" ? styles.active : ""
                )}
              >
                Pedidos
              </Link>
              <Link
                to="/Cart"
                className={classNames(
                  styles.smartOrder_Link,
                  active2 === "cart" ? styles.active : ""
                )}
              >
                <span className="material-symbols-outlined">shopping_cart</span>
              </Link>
              <Link to="/login" className={classNames(styles.smartOrder_Link)}>
                Iniciar sesión
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
