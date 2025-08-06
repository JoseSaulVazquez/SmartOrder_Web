import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./cards.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";

const BasicCard = ({ name, image, id, direccion }) => {
  return (
    <div className={classNames(styles.card)}>
      <div className={styles.card_image}>
        <img src={image} alt={name} />
      </div>
      <Link
        to={direccion}
        state={{ categoria: name }}
        className={styles.card_button}
      >
        {name}
      </Link>
    </div>
  );
};

const Card = ({ name, image }) => {
  return (
    <div className={classNames(styles.card)}>
      <div>
        <img src={image} alt="Desayuno" className="card-image" />
      </div>
      <Link className="card-footer" to="/#">
        {name}
      </Link>
    </div>
  );
};

const HorizontalCard = ({ name, image, price, direccion }) => {
  return (
    <Link
      to={direccion}
      state={{ categoria: name }}
      className={classNames(styles.horizontalCard)}
    >
      <div className={styles.left_section}>
        <div className={styles.card_image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.info}>
          <p>{name}</p>
        </div>
      </div>
      <div className={styles.right_section}>{price}</div>
    </Link>
  );
};

const SpecsCard = ({ name, children }) => {
  return (
    <div className={classNames(styles.specsCard)}>
      <div className={styles.specsName}>
        <h3>{name}</h3>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

const PriceCard = ({ name, description, price, pay, features }) => {
  const time =
    name === "Enterprise"
      ? 1.3
      : name === "Premium"
      ? 1
      : name === "Estandar"
      ? 0.7
      : 0.4;

  const type =
    name === "Enterprise"
      ? styles.enterprise
      : name === "Premium"
      ? styles.premium
      : "";

  const formattedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const mes = pay === "Mensual" ? "Mes" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Inicia invisible y más abajo
      whileInView={{ opacity: 1, y: 0 }} // Se hace visible y sube
      viewport={{ once: true, amount: 0.5 }} // Se activa cuando el 60% del elemento está visible
      transition={{ duration: time, ease: "easeOut" }}
      className={classNames(styles.priceCard, type)}
    >
      <div className={styles.name}>
        {/* <img src={image} alt={name} /> */}
        <h3>{name}</h3>
      </div>
      <div className={styles.description}>{description}</div>

      <div className={styles.price}>
        <h3>
          ${formattedPrice} / <span>{mes}</span>
        </h3>
      </div>
      <a
        href={`https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_xclick&business=demo@paypal.com&item_name=${encodeURIComponent(
        name
        )}&amount=${price}&currency_code=USD`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
      Obtener {name}
      </a>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} name={feature.name}>
            ✔ {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export { BasicCard, Card, HorizontalCard, SpecsCard, PriceCard };