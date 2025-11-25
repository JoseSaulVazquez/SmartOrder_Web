import React, { use, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./nav.module.css";
import classNames from "classnames";
import Logo from "../../assets/Logo.png";
import { userData } from "../../utils/Users";
import userImage from "../../../src/assets/varios/user_Image.png";

function NavbarAdmin() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [name, setName] = useState("Usuario");
  const [image, setImage] = useState(userImage);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!token) return;

        const data = await userData(token);
        if (data) {
          setUser(data);
        }
      } catch (error) {
        console.log("Error inesperado:", error);
      }
    };

    fetchUser();
  }, [token]);

  useEffect(() => {
    if (user && user.name) {
      setName(user.name.name);
      localStorage.setItem("userName", user.name.name)
    }
  }, [user]);

  return (
    <header
      className={classNames(
        styles.header,
        styles.normalHeader,
        styles.adminStyle
      )}
    >
      <nav className={styles.AdminNavbar}>
        <div className={`${styles.right}`}>
          <Link to="/login" className={styles.username}>
            <div className={styles.imageContainer}>
              <img src={image} alt={`${name} image`} />
            </div>

            {name}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavbarAdmin;
