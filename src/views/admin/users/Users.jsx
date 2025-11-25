import { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import styles from "./Users.module.css";
import { Management } from "../../../components/layouts/Layouts";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import { getUsers } from "../../../utils/Users";
import { Link } from "react-router-dom";

function Orders() {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!token) return;

        const data = await getUsers(token);
        if (data) {
          setUsers(data);
        }
      } catch (error) {
        console.log("Error inesperado:", error);
      }
    };

    fetchUser();
  }, [token]);

  // useEffect(() => {
  //   if (user?.name?.name) {
  //     const finalName = user.name.name;
  //   }
  // }, [user]);

  return (
    <>
      <NavbarAdmin />

      <Management>
        <h1 className={styles.title}>Usuarios</h1>

        <div className={styles.content}>
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Listado de usuarios</h2>

              <Link to="" className={styles.cardAddItem}>
                Añadir usuario
              </Link>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Celular</th>
                    <th>role</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {users && users.length > 0 ? (
                    users.map((user, i) => (
                      <tr key={i}>
                        <td>
                          {user.name.name} {user.name.paternal_surname}{" "}
                          {user.name.maternal_surname}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.cellphone?.countryCode || "-"} {user.cellphone?.number || "-"}</td>
                        <td>{user.role || "5"}</td>
                        <td>{user.date?.date || "-"}</td>
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
                        No hay usuarios para mostrar
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
