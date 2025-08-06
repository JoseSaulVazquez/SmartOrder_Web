import React from "react";
import { Link } from "react-router-dom";
import fatherStyles from "./../home.module.css";
import fatherstyles from "./../home.module.css";
import styles from "./app.module.css";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";
import {
  DefaultContainer,
  Imagen,
  RightImage,
} from "../../../components/layouts/Layouts";
import classNames from "classnames";
import image01 from "./../../../assets/varios/app01.jpg";
import image02 from "./../../../assets/varios/app03.jpg";
import image03 from "./../../../assets/varios/app02.jpeg";

function App() {
  return (
    <>
      <Navbar />

      <main className="bg_container">
        <div className={styles.imageBG}>
          <div className={classNames(styles.container, styles.opacity)}>
            <div className={styles.subContainer}>
              <h1>Gestión fácil y rápida</h1>

              <p>
                Nuestra app está diseñada para agilizar la toma de pedidos en
                restaurantes de manera sencilla e intuitiva.
              </p>

              <Link className={fatherStyles.button} to="/smartOrder/menu">
                <div>
                  <span>SIMULAR PEDIDO</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <section className={styles.container2}>
          <div className={styles.subContainer}>
            <DefaultContainer>
              <div className={styles.horizontal}>
                <div className={styles.info}>
                  <h3 className={styles.secondTitle}>
                    Accesible en cualquier lugar.
                  </h3>

                  <p>
                    Disponible en página web y aplicación móvil, y exploramos
                    compatibilidad con smartwatch para mayor comodidad. No
                    importa dónde estés, siempre tendrás el control de los
                    pedidos.
                  </p>
                </div>

                <div className={styles.imageContainer}>
                  <Imagen src={image01} alt="gente comiendo xd" />
                </div>
              </div>
            </DefaultContainer>
          </div>
        </section>
        <section className={styles.container2}>
          <div className={styles.subContainer}>
            <DefaultContainer>
              <div className={styles.horizontal}>
                <div className={styles.imageContainer}>
                  <Imagen src={image02} alt="un señor sonriendo" />
                </div>

                <div className={styles.info}>
                  <h3 className={styles.secondTitle}>
                    Una experiencia más ágil
                  </h3>

                  <p>
                    Nuestra aplicación está diseñada para hacer que la toma de
                    pedidos en restaurantes sea más rápida e intuitiva. Con una
                    interfaz sencilla, tanto los clientes como el personal
                    pueden gestionar órdenes de manera eficiente.
                  </p>
                </div>
              </div>
            </DefaultContainer>
          </div>
        </section>
        <section className={styles.container2}>
          <div className={styles.subContainer}>
            <DefaultContainer>
              <div className={styles.horizontal}>
                <div className={styles.info}>
                  <h3 className={styles.secondTitle}>
                    Un menú interactivo y personalizable
                  </h3>

                  <p>
                    Explora el menú por categorías: Desayunos, Comidas, Cenas,
                    Bebidas y Postres. Accede a promociones exclusivas y
                    personaliza tus pedidos con ingredientes y detalles
                    específicos antes de enviarlos a la cocina. Además, sigue el
                    estado de tu orden en tiempo real.
                  </p>
                </div>

                <div className={styles.imageContainer}>
                  <Imagen src={image03} alt="no sé xd" />
                </div>
              </div>
            </DefaultContainer>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
