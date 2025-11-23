import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";
import {
  RightImage,
  LeftImage,
  DefaultContainer,
  Imagen,
} from "../../components/layouts/Layouts";
import image01 from "../../assets/varios/example03.png";
import comensales from "../../assets/varios/comensales.jpg";
import cellphone from "../../assets/varios/cellphone.png";
import classNames from "classnames";
import { userData } from "../../utils/Users";

function Home() {


  return (
    <>
      <Navbar />

      <main className={`bg_container`}>
        <div className={styles.imageBG}></div>
        <div className={styles.background}>
          <div className={styles.subContainer}>
            <div className={styles.centerImg}>
              <img src={logo} alt="Logo" className={styles.img} />
            </div>

            <h1 className={styles.title}>Bienvenido a SmartOrder</h1>
            <span className={classNames(styles.subtitle, styles.sub)}>
              El cambio que tu restaurante necesita
            </span>
            <Link
              className={classNames(styles.imagebutton, styles.mtop)}
              to="/Help"
            >
              CONOCER MÁS
            </Link>
          </div>
        </div>

        <section className={styles.separator}>
          <div>
            <h3 className={styles.subtitle}>
              ¿Quieres mejorar el rendimiento de tu restaurante?
            </h3>
            <center>
              En SmartOrder te ayudamos a optimizar la gestión y, si lo
              necesitas, automatizar la toma de pedidos. Contamos con diferentes
              planes adaptados a tus necesidades.
            </center>
            
          </div>
        </section>

        <section className={styles.container}>
          <div className={classNames(styles.section_container)}>
            <RightImage
              text="Smart Order agiliza los pedidos en restaurantes con una interfaz 
                    intuitiva y adaptable. Integra soporte para personas con discapacidad 
                    visual mediante Alexa y permite a los dueños personalizar sus menús 
                    para una gestión más eficiente."
              image={image01}
              title="Innovación en la Gestión de Pedidos para Restaurantes"
              extra={
                <Link className={classNames(styles.button)} to="/features">
                  <div>
                    <span>VER CARACTERISTICAS</span>
                  </div>
                </Link>
              }
            />
          </div>
        </section>

        <div className={styles.separator2}>
          <h3>Servicio para todos</h3>
          <span>
            Facilitamos la gestión de pedidos en restaurantes, asegurando una
            experiencia accesible para todos.
          </span>
        </div>

        <section className={styles.container}>
          <div>
            <DefaultContainer>
              <h3 className={styles.secondTitle}>
                ventajas de SmartOrder para tu restaurante
              </h3>
              <div
                className={classNames(styles.horizontalContainer, styles.mtop)}
              >
                <div className={styles.imageContainer}>
                  <Imagen src={comensales} alt="gente comiendo xd" />
                </div>

                <ul className={styles.list}>
                  <li>
                    Optimiza la toma de pedidos, reduciendo errores y tiempos de
                    espera.
                  </li>
                  <li>
                    Agiliza el servicio, mejorando la entrega de los platillos.
                  </li>
                  <li>
                    Mayor atencion a los clientes, brindando una experiencia más
                    dinámica.
                  </li>
                  <li>
                    Mejora la eficiencia operativa, gestionando pedidos de forma
                    más rápida.
                  </li>
                  <li>
                    Reduce costos, optimizando recursos y minimizando
                    desperdicios.
                  </li>
                </ul>
              </div>
            </DefaultContainer>
          </div>
        </section>

        <section className={classNames(styles.container, styles.second)}>
          <div className={styles.section_container}>
            <LeftImage
              text={
                <>
                  Realiza tus pedidos y reservaciones de forma rápida y
                  sencilla. ó <br />
                  Controla pedidos, optimiza tiempos y mejora la experiencia de
                  tus clientes, todo desde la palma de tu mano."
                </>
              }
              image={cellphone}
              title="Descarga nuestra App Móvil"
              extra={
                <div className={styles.verticalContainer}>
                  <Link
                    className={classNames(
                      styles.button,
                      styles.mtop,
                      styles.noButton
                    )}
                     to="https://es.aptoide.com/"
                  >
                    <div>
                      <span>DESCARGAR</span>
                    </div>
                  </Link>
                </div>
              }
            />
          </div>
        </section>

        {/* <section className={styles.container}>
          <div>
            <p>ventajas </p>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
}

export default Home;
