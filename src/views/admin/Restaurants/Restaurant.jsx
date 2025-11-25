import React, { useEffect, useState } from "react";
import styles from "./Restaurant.module.css";
import { Management } from "../../../components/layouts/Layouts";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import Footer from "../../../components/footer/Footer";
import RestaurantForm from "./RestaurantForm";
import { getMyRestaurants } from "../../../utils/restaurants";
import { Link } from "react-router-dom";

function Restaurant() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();
  const [restaurants, setRestaurants] = useState();

  // 2. Estado para controlar la visibilidad del formulario
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchRest = async () => {
      try {
        if (!token) return;

        const data = await getMyRestaurants(token);
        if (data) {
          setRestaurants(data);
          console.log(data);
        }
      } catch (error) {
        console.log("Error inesperado:", error);
      }
    };

    fetchRest();
  }, [token]);

  return (
    <>
      <NavbarAdmin />

      <Management>
        <h1 className={styles.title}>Mi(s) restaurantes</h1>
        <p className={styles.subText}>
          Aquí podras ver tu restaurante y acomodar los menus
        </p>

        <div className={styles.content}>
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Listado de restaurantes</h2>

              <Link to="" className={styles.cardAddItem}>
                Añadir restaurante
              </Link>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>categoria</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {restaurants && restaurants.length > 0 ? (
                    restaurants.map((rest, i) => (
                      <tr key={i}>
                        <td>{rest.name}</td>
                        <td>{rest.description}</td>
                        <td>{rest.date?.date || "-"}</td>
                        <td>{rest.category?.join(", ") || "-"}</td>
                        <td>{rest.status || "Activo"}</td>
                        <td className={styles.buttons}>
                          <button className={styles.actionBtn}>
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button className={styles.actionBtnDelete}>
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className={styles.emptyData}>
                        No hay registros para mostrar
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </Management>

      <Footer />
    </>
  );
}

export default Restaurant;
