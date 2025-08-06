import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Session.module.css";

export default function PlatilloList({ editarPlatillo }) {
  const [platillos, setPlatillos] = useState([]);
  const [filtro, setFiltro] = useState("Todos");

  const obtenerPlatillos = async () => {
    try {
      const res = await axios.get("http://localhost:3300/api/platillos");
      setPlatillos(res.data);
    } catch (error) {
      console.error("Error al obtener platillos:", error);
    }
  };

  const eliminar = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este platillo?")) {
      try {
        await axios.delete(`http://localhost:3300/api/platillos/${id}`);
        obtenerPlatillos();
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  useEffect(() => {
    obtenerPlatillos();
  }, []);

  const filtrados = filtro === "Todos" ? platillos : platillos.filter(p => p.categoria === filtro);

  return (
    <div className={styles.platillo_list}>
      <div className={styles.filter_group}>
        <label>Filtrar por categoría:</label>
        <select 
          onChange={(e) => setFiltro(e.target.value)}
          className={styles.select}
        >
          <option value="Todos">Todos</option>
          {["Desayunos", "Comidas", "Entradas", "Postres", "Bebidas"].map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <ul className={styles.items_list}>
        {filtrados.map(p => (
          <li key={p._id} className={styles.item_card}>
            <div className={styles.item_info}>
              <h3 className={styles.nomPlatillo}>{p.nombre}</h3>
              <p>${parseFloat(p.precio).toFixed(2)}</p>
              <span className={styles.category_badge}>{p.categoria}</span>
            </div>
            <div className={styles.item_actions}>
              <button 
                onClick={() => editarPlatillo(p)}
                className={styles.edit_button}
              >
                Editar
              </button>
              <button 
                onClick={() => eliminar(p._id)}
                className={styles.delete_button}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}