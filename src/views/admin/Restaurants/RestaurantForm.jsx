import React, { useState } from "react";
import styles from "./Restaurant.module.css"; // Asumiendo que crearás un CSS para el form

const RestaurantForm = ({ onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Estado para los campos de texto
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    countryCode: "+52", // Valor por defecto ejemplo
    number: "",
    category: "",
  });

  // Estado separado para los archivos
  const [files, setFiles] = useState({
    logo: null,
    mainImage: null,
    images: [], // Array de archivos
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    if (name === "images") {
      // Para múltiples imágenes
      setFiles((prev) => ({ ...prev, images: Array.from(fileList) }));
    } else {
      // Para logo y mainImage (single)
      setFiles((prev) => ({ ...prev, [name]: fileList[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Obtener el owner desde localStorage
    const storedUser = localStorage.getItem("userData");
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (!user || !user.id) {
      // Asumiendo que el objeto user tiene un 'id'
      setError("No se pudo identificar al usuario propietario.");
      setLoading(false);
      return;
    }

    // Crear instancia de FormData para enviar archivos + texto
    const dataPayload = new FormData();

    // 1. Agregar campos de texto
    dataPayload.append("name", formData.name);
    dataPayload.append("description", formData.description);
    dataPayload.append("owner", user.id); // O user.username, según tu backend
    dataPayload.append("email", formData.email);
    dataPayload.append("countryCode", formData.countryCode);
    dataPayload.append("number", formData.number);
    dataPayload.append("category", formData.category);

    // 2. Agregar archivos simples
    if (files.logo) dataPayload.append("logo", files.logo);
    if (files.mainImage) dataPayload.append("mainImage", files.mainImage);

    // 3. Agregar archivos múltiples
    files.images.forEach((file) => {
      dataPayload.append("images", file);
    });

    try {
      // Ajusta la URL a tu endpoint real
      const response = await fetch("http://localhost:3000/api/restaurants", {
        method: "POST",
        body: dataPayload,
        // NOTA: Con FormData NO debes poner 'Content-Type': 'application/json'
        // El navegador lo pone automáticamente como multipart/form-data
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.data || "Error al crear el restaurante");
      }

      alert("¡Restaurante creado con éxito!");
      if (onSuccess) onSuccess(); // Callback para recargar la lista
      if (onClose) onClose(); // Callback para cerrar el formulario
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Registrar Nuevo Restaurante</h2>
      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label>Nombre del Restaurante</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label>Descripción</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label>Email de contacto</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.group}>
            <label>Categoría</label>
            <input
              type="text"
              name="category"
              placeholder="Ej: Italiana, Mexicana"
              required
              value={formData.category}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.group} style={{ flex: 1 }}>
            <label>Cód. País</label>
            <input
              type="text"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            />
          </div>
          <div className={styles.group} style={{ flex: 3 }}>
            <label>Teléfono</label>
            <input
              type="tel"
              name="number"
              required
              value={formData.number}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Inputs de Archivos */}
        <div className={styles.group}>
          <label>Logo (Imagen)</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className={styles.group}>
          <label>Imagen Principal (Portada)</label>
          <input
            type="file"
            name="mainImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className={styles.group}>
          <label>Galería de Imágenes (Opcional)</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={onClose} disabled={loading}>
            Cancelar
          </button>
          <button type="submit" disabled={loading}>
            {loading ? "Creando..." : "Registrar Restaurante"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RestaurantForm;
