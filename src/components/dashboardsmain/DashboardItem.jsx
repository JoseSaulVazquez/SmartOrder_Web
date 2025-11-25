import React from "react";
import styles from "./DashboardItem.module.css";
import classNames from "classnames";
import { motion } from "framer-motion";

const DashboardCard = ({ title, description, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={classNames(styles.dashboardCard, styles[type])}
    >
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>

      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
