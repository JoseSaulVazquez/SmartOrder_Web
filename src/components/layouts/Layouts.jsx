import React from "react";
import { motion } from "framer-motion";
import styles from "./layouts.module.css";
import classNames from "classnames";

const RightImage = ({ title, text, image, extra }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Inicia invisible y más abajo
      whileInView={{ opacity: 1, y: 0 }} // Se hace visible y sube
      viewport={{ once: true, amount: 0.6 }} // Se activa cuando el 60% del elemento está visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={classNames(styles.container, styles.right)}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p>{text}</p>
        {extra}
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </motion.div>
  );
};

const LeftImage = ({ title, text, image, extra }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Inicia invisible y más abajo
      whileInView={{ opacity: 1, y: 0 }} // Se hace visible y sube
      viewport={{ once: true, amount: 0.5 }} // Se activa cuando el 20% del elemento está visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={classNames(styles.container, styles.left)}
    >
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p>{text}</p>
        {extra}
      </div>
    </motion.div>
  );
};

const MidImage = ({ title, text, image, extra }) => {
  return (
    <div className={classNames(styles.container, styles.left)}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.info}>
        <p>{text}</p>
        {extra}
      </div>
    </div>
  );
};

const DefaultContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Inicia invisible y más abajo
      whileInView={{ opacity: 1, y: 0 }} // Se hace visible y sube
      viewport={{ once: true, amount: 0.6 }} // Se activa cuando el 60% del elemento está visible
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={classNames(styles.default)}
    >
      {children}
    </motion.div>
  );
};

const Imagen = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={classNames(styles.imagen)}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
};

export { RightImage, LeftImage, MidImage, DefaultContainer, Imagen };
