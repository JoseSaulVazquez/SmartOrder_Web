import React, { useState } from "react";
import styles from "./Restaurant.module.css";
import { Management } from "../../../components/layouts/Layouts";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import Footer from "../../../components/footer/Footer";

function Restaurant() {
  const storedUser = localStorage.getItem("userData");
  const user = storedUser ? JSON.parse(storedUser) : {};
  const Role = user.role;

  // 2. Estado para controlar la visibilidad del formulario
  const [showForm, setShowForm] = useState(false);

  // Función para recargar la lista después de crear (puedes implementarla luego)
  const handleRefreshList = () => {
    console.log("Refrescando lista de restaurantes...");
    // Aquí harías un fetch para obtener los restaurantes actualizados
  };

  return (
    <>
      <NavbarAdmin />

      <Management>
        <div>
          <div className={styles.header_container}>
            <h1 className={styles.title}>
              {Role ? "Mi restaurante" : "Mis restaurantes"}
            </h1>

            {/* Botón para abrir el formulario */}
            <button
              className={styles.createButton}
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Cerrar Formulario" : "+ Nuevo Restaurante"}
            </button>
          </div>

          <div className={styles.panels_container}>
            {/* Renderizado condicional del formulario */}
            {showForm && (
              <div className={styles.formWrapper}>
                <RestaurantForm
                  onClose={() => setShowForm(false)}
                  onSuccess={handleRefreshList}
                />
              </div>
            )}
          </div>

          <div className={styles.restaurant_list}>
            {/* Aquí iría tu .map() de restaurantes existentes */}
            <p>Lista de restaurantes...</p>
          </div>
        </div>
      </Management>

      <Footer />
    </>
  );
}

export default Restaurant;
