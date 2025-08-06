import React from "react";
import styles from "./menu.module.css";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";
import classNames from "classnames";
import { BasicCard } from "../../../components/cards/Cards";
import { options } from "../../../utils/categorias";

function Menu() {
  const categorias = options

  return (
    <>
      <Navbar />

      <main className="bg_container">
        <div className={styles.container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>MENÚ</h1>
          </div>

          <div className={classNames(styles.card_container)}>
            {categorias.map((option, index) => (
              <BasicCard
              key={index}
              image={option.image}
              name={option.title}
              direccion={`/smartOrder/menu/${option.id}`}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Menu;
