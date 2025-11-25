import { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import styles from "./Orders.module.css";
import { Management } from "../../../components/layouts/Layouts";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import { userData } from "../../../utils/Users";

function Orders() {
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
          Ordenes de tus restaurantes
        </h1>
    
        <div className={styles.content}>
          
        </div>
      </Management>

      <Footer />
    </>
  );
}

export default Orders;