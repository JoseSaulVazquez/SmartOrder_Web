import React, { useState } from "react";
import styles from "./Foods.module.css";
import NavbarAdmin from "../../../components/nav/NavbarAdmin";
import { Management } from "../../../components/layouts/Layouts";
import Footer from "../../../components/footer/Footer";

function Foods() {
  const [form, setForm] = useState({
    name: "",
    restaurantID: "",
    description: "",
    price: "",
    category: "",
    details: "",
  }); 

  const [foods, setFoods] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFoods([...foods, form]);

    setForm({
      name: "",
      restaurantID: "",
      description: "",
      price: "",
      category: "",
      details: "",
    });
  };

  return (
    <>
      <NavbarAdmin />

      <Management>
        <div className={styles.container}>
      
      <h2 className={styles.title}>Gestión de Alimentos</h2>

      <div className={styles.panels_container}>

        {/* PANEL IZQUIERDO – FORM */}
        <div className={styles.panel_left}>
          <form onSubmit={handleSubmit} className={styles.platillo_form}>

            <div className={styles.input_group}>
              <label>Nombre</label>
              <input
                className={styles.input_field}
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.input_group}>
              <label>Restaurant ID</label>
              <input
                className={styles.input_field}
                name="restaurantID"
                value={form.restaurantID}
                onChange={handleChange}
                required
              />
            </div>

            {/* DESCRIPCIÓN → ahora ocupa 2 columnas */}
            <div className={`${styles.input_group} ${styles.textarea_group}`}>
              <label>Descripción</label>
              <textarea
                className={styles.textarea_field}
                name="description"
                value={form.description}
                onChange={handleChange}
              />
            </div>

            <div className={styles.input_group}>
              <label>Precio</label>
              <input
                type="number"
                className={styles.input_field}
                name="price"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.input_group}>
              <label>Categoría</label>
              <input
                className={styles.input_field}
                name="category"
                value={form.category}
                onChange={handleChange}
              />
            </div>

            {/* DETALLES → también ocupa 2 columnas */}
            <div className={`${styles.input_group} ${styles.textarea_group}`}>
              <label>Detalles</label>
              <textarea
                className={styles.textarea_field}
                name="details"
                value={form.details}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submit_button}>
              Guardar
            </button>
          </form>
        </div>

        {/* PANEL DERECHO – LISTA */}
        <div className={styles.panel_right}>
          <h3 className={styles.list_title}>Lista de Alimentos</h3>

          <div className={styles.cards}>
            {foods.map((food, i) => (
              <div key={i} className={styles.card}>
                <h3>{food.name}</h3>
                <p><strong>Restaurant ID:</strong> {food.restaurantID}</p>
                <p><strong>Precio:</strong> ${food.price}</p>
                <p><strong>Descripción:</strong> {food.description}</p>
                <p><strong>Detalles:</strong> {food.details}</p>

                {food.category && (
                  <span className={styles.category_badge}>
                    {food.category}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
      </Management>

      <Footer />
    </>
    
  );
}

export default Foods;
