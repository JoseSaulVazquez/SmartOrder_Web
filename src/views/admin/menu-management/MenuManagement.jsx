import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import PlatilloForm from "./PlatilloForm";
import PlatilloList from "./PlatilloForm";
import styles from "./Session.module.css"; 

function MenuManagement() {
  const [editar, setEditar] = useState(null);
  const [actualizar, setActualizar] = useState(0);
  const navigate = useNavigate();

  const obtenerPlatillos = () => setActualizar(actualizar + 1);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <main className={styles.menu_container}>
      {/* Botón de cierre de sesión */}
      <button 
        onClick={handleLogout}
        className={styles.logout_button}
      >
        <span className="material-symbols-outlined">logout</span>
        Cerrar Sesión
      </button>

      <h1 className={styles.title}>Gestión de Menú</h1>

      <div className={styles.panels_container}>
        {/* Panel izquierdo: Formulario */}
        <section className={styles.panel_left}>
          <h2>{editar ? "Editar Platillo" : "Agregar Nuevo Platillo"}</h2>
          <PlatilloForm 
            obtenerPlatillos={obtenerPlatillos} 
            editar={editar} 
            setEditar={setEditar} 
          />
        </section>

        {/* Panel derecho: Lista */}
        <section className={styles.panel_right}>
          <h2>Lista de Platillos</h2>
          <PlatilloList 
            key={actualizar} 
            editarPlatillo={setEditar} 
          />
        </section>
      </div>
    </main>
  );
}

export default MenuManagement;
