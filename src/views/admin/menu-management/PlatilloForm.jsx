import { useState } from "react";
import axios from "axios";
import styles from "./menuManagement.module.css";

const categorias = ["Desayunos", "Comidas", "Entradas", "Postres", "Bebidas"];

export default function PlatilloForm({ obtenerPlatillos, editar, setEditar }) {
  const [form, setForm] = useState(
    editar || { nombre: "", precio: "", categoria: "Desayunos" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviar = async (e) => {
    e.preventDefault();
    try {
      if (editar) {
        await axios.put(`http://localhost:3300/api/platillos/${editar._id}`, form);
        setEditar(null);
      } else {
        await axios.post("http://localhost:3300/api/platillos", form);
      }
      setForm({ nombre: "", precio: "", categoria: "Desayunos" });
      obtenerPlatillos();
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <form onSubmit={enviar} className={styles.platillo_form}>
<div className={styles.input_group}>
  <label>Nombre</label>
  <input
    name="nombre"
    placeholder="Nombre del platillo"
    value={form.nombre}
    onChange={handleChange}
    required
    className={styles.input_field} // Nueva clase
  />
</div>

<div className={styles.input_group}>
  <label>Precio ($)</label>
  <input
    name="precio"
    placeholder="Precio"
    type="number"
    min="0"
    step="0.01"
    value={form.precio}
    onChange={handleChange}
    required
    className={styles.input_field} // Nueva clase
  />
</div>

      <div className={styles.input_group}>
        <label>Categoría</label>
        <select 
          name="categoria" 
          value={form.categoria} 
          onChange={handleChange}
          className={styles.select}
        >
          {categorias.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

<button 
  type="submit" 
  className={`${styles.login_button} ${styles.tall_button}`} // Agrega una clase adicional
>
  {editar ? "Actualizar Platillo" : "Agregar Platillo"}
</button>
    </form>
  );
}