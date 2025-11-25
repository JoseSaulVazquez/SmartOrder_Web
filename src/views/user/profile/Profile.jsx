import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { userData } from "../../../utils/Users";
import Navbar from "../../../components/nav/Navbar";
import Footer from "../../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();

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

  if (!user) return <div>Cargando perfil...</div>;

  const getFullName = () => {
    return `${user.name?.name} ${user.name?.paternal_surname} ${
      user.name?.maternal_surname || ""
    }`;
  };

  const getInitials = () => {
    const n = user.name?.name?.charAt(0) || "";
    const s = user.name?.paternal_surname?.charAt(0) || "";
    return (n + s).toUpperCase();
  };

  const getRoleName = (roleId) => {
    // Puedes ajustar esto según tu lógica de roles
    return roleId === 1 ? "Administrador / Restaurantero" : "Cliente";
  };

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.card}>
          {/* Cabecera Visual */}
          <div className={styles.header}>
            <div className={styles.avatar}>{getInitials()}</div>
            <h1 className={styles.fullName}>{getFullName()}</h1>
            <span className={styles.roleTag}>{getRoleName(user.role)}</span>
          </div>

          {/* Detalles del Usuario */}
          <div className={styles.body}>
            <div className={styles.sectionTitle}>Información de Contacto</div>
            <div className={styles.grid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Correo Electrónico</span>
                <span className={styles.value}>{user.email}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Teléfono Móvil</span>
                <span className={styles.value}>
                  {user.cellphone?.countryCode} {user.cellphone?.number}
                </span>
              </div>
            </div>

            <div className={styles.sectionTitle}>Detalles de la Cuenta</div>
            <div className={styles.grid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Miembro desde</span>
                <span className={styles.value}>{user.date?.date}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Hora de registro</span>
                <span className={styles.value}>{user.date?.time}</span>
              </div>
            </div>

            <div className={styles.actions}>
              <Link to="#" className={styles.btnEdit}>Editar datos</Link>

              <button className={styles.btnLogout} onClick={Logout}>
                Cerrar sesión
              </button>
            </div>

            <div style={{ marginTop: "20px", textAlign: "right" }}></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
