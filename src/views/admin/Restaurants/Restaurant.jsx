import React from "react";
import styles from "./Restaurant.module.css";
import { Management } from "../../../components/layouts/Layouts";

function Restaurant() {
  const user = localStorage.getItem("userData");

  const Role = user.role;

  console.log(user);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    countryCode: "+52",
    number: "",
    category: "",
  });

  const [files, setFiles] = useState({
    logo: null,
    mainImage: null,
    images: [],
  });

  const change = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const FileChange = (e) => {
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
    dataPayload.append("owner", user.id);
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
    <>
      <Navbar />

      <Management>
        <div>
          <h1 className={styles.title}>
            {Role ? "Mi restaurante" : "Mis restaurantes"}
          </h1>

          <div className={styles.panels_container}></div>

          <div className={styles.restaurant_list}></div>
        </div>
      </Management>

      <Footer />
    </>
  );
}

export default Restaurant;
