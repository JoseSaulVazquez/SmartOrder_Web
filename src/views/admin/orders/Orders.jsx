import { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import styles from "./Orders.module.css";
import { Management } from "../../../components/layouts/Layouts";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import { userData } from "../../../utils/Users";

function Orders() {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!token) return;

        const data = await userData(token);
        if (data) {
          setOrders(data);
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
        <h1 className={styles.title}>Ordenes de tus restaurantes</h1>

        <div className={styles.content}>
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Listado de Ordenes</h2>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>cliente</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {orders && orders.length > 0 ? (
                    orders.map((order, i) => (
                      <tr key={i}>
                        <td>{order.name}</td>
                        <td>{order.description}</td>
                        <td>{order.date?.date || "-"}</td>
                        <td>{order.cliente?.join(", ") || "-"}</td>
                        <td>{order.status || "Activo"}</td>
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

export default Orders;
