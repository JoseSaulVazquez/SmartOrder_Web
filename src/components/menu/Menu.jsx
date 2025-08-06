import React, { useState } from "react";
import styles from "./menu.module.css";
import classNames from "classnames";

const Menu = ({ open, setOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  // const [state, setState] = useState(false)

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle("dark-mode", !darkMode);
  // };

  const active = open ? "" : styles.hidden;

  return (
    <div className={classNames(styles.bg, { [styles.hidden]: !open })}>
      <div className={styles.modal} onClick={() => setOpen(false)}></div>

      <div className={classNames(styles.menu, { [styles.menuActive]: open })}>
        <div className={styles.header}>
          <h1 className={styles.smart}>SmartOrder</h1>
          <div className={styles.underline}></div>
        </div>
        <menu className={styles.menuItems}>
          <div className={styles.option}>
            <div className={styles.optionContent}>
              <p>Tema</p>
              {/* <button onClick={toggleTheme} className={styles.toggleButton}>
              // {/* {darkMode ? <Moon size={20} /> : <Sun size={20} />} */}
              {/* </button> */}
              <span className="material-symbols-outlined">light_mode</span>
            </div>
          </div>

          <div className={classNames(styles.option, styles.logout)}>
            <div className={styles.optionContent}>
              <p>Cerrar sesión</p>
              <span className="material-symbols-outlined">logout</span>
            </div>
          </div>
        </menu>
      </div>
    </div>
  );
};

export { Menu };
