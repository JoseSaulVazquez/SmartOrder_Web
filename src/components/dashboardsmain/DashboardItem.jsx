import React, { useState } from "react";
import styles from "./DashboardItem.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DashboardCard = ({ title, description, type, num, route }) => {
  const getDirection = () => {
    switch (type) {
      case "restaurant":
        return "Restaurantes";
      case "foods":
        return "Alimentos";
      case "orders":
        return "Pedidos";
      case "report":
        return "Reportes";
      default:
        return "Panel";
    }
  };

  const direction = getDirection();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={classNames(styles.dashboardCard, styles[type])}
    >
      <div className={classNames(styles.header, styles[type])}>
        <h3>{title}</h3>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.body}>
        <div className={classNames(styles.description, styles[type])}>
          <p>{description}</p>
        </div>

        {num && <p>mis restaurantes: {num}</p>}

        <Link to={route} className={styles.link}>ir a mi(s) {direction}</Link>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
