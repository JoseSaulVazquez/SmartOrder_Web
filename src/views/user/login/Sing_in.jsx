import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./session.module.css";
import logo from "./../../../assets/Logo.png";
import restaurante from "./../../../assets/varios/Restaurante.jpg";
import { sing_in } from "../../../utils/Users";

function Sing_in() {
  const navigator = useNavigate();
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [firstButton, setFirstButton] = useState("Regresar");
  const [secondButton, setSecondButton] = useState("Siguiente");
  const [formData, setFormData] = useState({
    name: {
      name: "",
      paternal_surname: "",
      maternal_surname: "",
    },
    email: "",
    cellphone: "",
    password: "",
    rol: 5,
  });
  const [pre_password, setPre_password] = useState("");

  const change = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeName = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      name: {
        ...prev.name,
        [name]: value,
      },
    }));
  };

  const regsiter = (e) => {
    e.preventDefault();
    if (step < 2) setStep(step + 1);

    if (step === 1) {
      setSecondButton("Registrarse");
    }
    if (step === 2) {
      if (formData.password !== pre_password) {
        alert("Las contraseñas no coinciden");
        return;
      } else {
        // console.log(formData);

        sing_in(formData);
      }
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
    setSecondButton("Siguiente");
    if (step === 0) {
      navigator("/login");
    }
  };

  return (
    <main className={styles.login_container}>
      {/* Botón de regreso */}
      <Link to="/" className={styles.back_button}>
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </Link>

      {/* Sección Izquierda: Formulario */}
      <div className={styles.login_left}>
        <div className={styles.sing_form}>
          <img src={logo} alt="Logo" className={styles.login_logo} />
          <h2>Regsitrar</h2>
          <form onSubmit={regsiter}>
            {step === 0 && (
              <div className={styles.inputs_group}>
                <div className={styles.input_group}>
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name.name}
                    onChange={changeName}
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>

                <div className={styles.inputmid_group}>
                  <div className={styles.input_group}>
                    <label>Apellido Paterno</label>
                    <input
                      type="text"
                      name="paternal_surname"
                      value={formData.name.paternal_surname}
                      onChange={changeName}
                      placeholder="Apellido paterno"
                      required
                    />
                  </div>

                  <div className={styles.input_group}>
                    <label>Apellido Materno</label>
                    <input
                      type="text"
                      name="maternal_surname"
                      value={formData.name.maternal_surname}
                      onChange={changeName}
                      placeholder="Apellido materno"
                    />
                  </div>
                </div>
              </div>
            )}
            {step === 1 && (
              <div className={styles.inputs_group}>
                <div className={styles.input_group}>
                  <label>Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={change}
                    placeholder="Ingrese su correo electrónico"
                    required
                  />
                </div>

                <div className={styles.input_group}>
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    name="cellphone"
                    value={formData.cellphone}
                    onChange={change}
                    placeholder="Ingrese su número de teléfono"
                    required
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className={styles.inputs_group}>
                <div className={styles.input_group}>
                  <label>Contraseña</label>
                  <input
                    type="password"
                    name="pre-password"
                    value={pre_password}
                    onChange={(e) => setPre_password(e.target.value)}
                    placeholder="Ingrese su contraseña"
                    required
                  />
                </div>
                <div className={styles.input_group}>
                  <label>Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={change}
                    placeholder="Ingrese su contraseña"
                    required
                  />
                </div>
              </div>
            )}

            <div className={styles.button_group}>
              <button
                type="button"
                className={styles.login_button}
                onClick={prevStep}
              >
                {firstButton}
              </button>
              <button type="submit" className={styles.login_button}>
                {secondButton}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sección Derecha: Imagen */}
      <div className={styles.login_right}>
        <img
          src={restaurante}
          alt="Restaurante"
          className={styles.login_image}
        />
      </div>
    </main>
  );
}

export default Sing_in;
