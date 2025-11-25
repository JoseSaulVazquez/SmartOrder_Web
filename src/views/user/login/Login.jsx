import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./session.module.css";
import logo from "./../../../assets/Logo.png";
import restaurante from "./../../../assets/varios/Restaurante.jpg";
import { login } from "../../../utils/Users";

function Login() {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
      remember,
    };

    const success = await login(formData);

    if (success) {
      const role = localStorage.getItem("role");

      console.log(role);

      if (role < 4) {
        navigator("/admin/menu-management");
      } else {
        
        navigator("/");
      }
    } else {
      alert("Credenciales incorrectas");
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
        <div className={styles.login_form}>
          <img src={logo} alt="Logo" className={styles.login_logo} />
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className={styles.input_group}>
              <label>Correo Electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su correo electrónico"
                required
              />
            </div>
            <div className={styles.input_group}>
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            <div className={styles.horizontal}>
              <input
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="remember">Recordar sesión</label>
            </div>
            <button type="submit" className={styles.login_button}>
              Ingresar
            </button>
            <Link to="/sing-up">Registrarme</Link>
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

export default Login;
