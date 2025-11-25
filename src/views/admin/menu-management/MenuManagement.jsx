import { useState } from "react";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import PlatilloForm from "./PlatilloForm";
import PlatilloList from "./PlatilloForm";
import styles from "./menuManagement.module.css";
import { Management } from "../../../components/layouts/Layouts";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import DashboardCard from "../../../components/dashboardsmain/DashboardItem";

function MenuManagement() {
  const [editar, setEditar] = useState(null);
  const [actualizar, setActualizar] = useState(0);

  const obtenerPlatillos = () => setActualizar(actualizar + 1);

  return (
    <>
      <NavbarAdmin />

      <Management>
        <h1 className={styles.title}>Gestión de Menú</h1>
        <div className={styles.cards}>
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
        <DashboardCard
        title="Restaurantes"
        description="Administra tus restaurantes aquí"
        type="qwerty"
        />
        </div>
        <div className={styles.panels_container}>
          <section className={styles.panel_left}>
            <h2>{editar ? "Editar Platillo" : "Agregar Nuevo Platillo"}</h2>
            <PlatilloForm
              obtenerPlatillos={obtenerPlatillos}
              editar={editar}
              setEditar={setEditar}
            />
          </section>

          <section className={styles.panel_right}>
            <h2>Lista de Platillos</h2>
            <PlatilloList key={actualizar} editarPlatillo={setEditar} />
          </section>
        </div>
      </Management>

      <Footer />
    </>
  );
}

export default MenuManagement;
