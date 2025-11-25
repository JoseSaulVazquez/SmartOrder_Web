import { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import PlatilloForm from "./PlatilloForm";
import PlatilloList from "./PlatilloForm";
import styles from "./menuManagement.module.css";
import { Management } from "../../../components/layouts/Layouts";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import DashboardCard from "../../../components/dashboardsmain/DashboardItem";
import { userData } from "../../../utils/Users";

function MenuManagement() {
  const [editar, setEditar] = useState(null);
  const [actualizar, setActualizar] = useState(0);
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

  const obtenerPlatillos = () => setActualizar(actualizar + 1);

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
    if (user?.name?.name) {
      const finalName = user.name.name;
    }
  }, [user]);

  return (
    <>
      <NavbarAdmin />

      <Management>
        <h1 className={styles.title}>
          Bienvenido {user?.name?.name || "Usuario"}
        </h1>
        <p className={styles.subText}>Bienvenido a tu administrador de datos para tu(s) restaurantes</p>

        <div className={styles.cards}>
          <DashboardCard
            title="Restaurantes"
            description="Administra tus restaurantes aquí"
            type="restaurant"
          />
          <DashboardCard
            title="Restaurantes"
            description="Administra tus restaurantes aquí"
            type="qwerty"
          />
          <DashboardCard
            title="Restaurantes"
            description="Administra tus restaurantes aquí"
            type="qwerty"
          />
          <DashboardCard
            title="Restaurantes"
            description="Administra tus restaurantes aquí"
            type="qwerty"
          />
        </div>
      </Management>

      <Footer />
    </>
  );
}

export default MenuManagement;
