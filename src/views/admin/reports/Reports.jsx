import { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import styles from "./Reports.module.css";
import { Management } from "../../../components/layouts/Layouts";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import { userData } from "../../../utils/Users";

function Reports() {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

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
          Reportes y estadisticas
        </h1>
        <p className={styles.subText}>Aquí podras ver un reporte y estadisticas de tu(s) restaurante(s)</p>

        <div className={styles.content}>
          
        </div>
      </Management>

      <Footer />
    </>
  );
}

export default Reports;