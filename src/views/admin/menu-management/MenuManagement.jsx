import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import PlatilloForm from "./PlatilloForm";
import PlatilloList from "./PlatilloList";
import styles from "./Session.module.css"; 

function MenuManagement() {
  const [editar, setEditar] = useState(null);
  const [actualizar, setActualizar] = useState(0);
  const navigate = useNavigate(); // Crea el navegador

  const obtenerPlatillos = () => setActualizar(actualizar + 1);

  const handleLogout = () => {
    // Limpiar localStorage si es necesario
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    
    // Redirigir al home
    navigate("/");
  };

  return (
    <main className={styles.login_container}>
            {/* Botón de cierre de sesión */}
      <button 
        onClick={handleLogout}
        className={styles.logout_button}
      >
        <span className="material-symbols-outlined">logout</span>
        Cerrar Sesión
      </button>
      <div className={styles.login_left}>
        <div className={styles.login_form}>
          <h1 className={styles.title}>Gestión de Menú</h1>
          
          <section className={styles.section_form}>
            <h2>{editar ? "Editar Platillo" : "Agregar Nuevo Platillo"}</h2>
            <PlatilloForm 
              obtenerPlatillos={obtenerPlatillos} 
              editar={editar} 
              setEditar={setEditar} 
            />
          </section>

          <section className={styles.section_list}>
            <h2>Lista de Platillos</h2>
            <PlatilloList key={actualizar} editarPlatillo={setEditar} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default MenuManagement;