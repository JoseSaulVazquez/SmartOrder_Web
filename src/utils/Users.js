import axios from "axios";
const URI = "https://smartorder-team-back.onrender.com";

async function sing_in(data) {
  try {
    const response = await axios.post(URI + "/api/signIn", data);
    console.log(response.data);
    alert("Usuario registrado con éxito");
    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("Error al registrar usuario");
  }
}

async function login(data) {
  try {
    const response = await axios.post(`${URI}/api/login`, data);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.user_role);

    return true;
  } catch (error) {
    console.error("Error en el login:", error.response?.data || error.message);
    return false;
  }
}

async function userData(token) {
  try {
    const response = await axios.get(`${URI}/auth/userData`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error en el login:", error.response?.data || error.message);
    return false;
  }
}

async function getUsers(token) {
  try {
    const response = await axios.get(`${URI}/auth/get-All-User`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error en el login:", error.response?.data || error.message);
    return false;
  }
}

export { sing_in, login, userData, getUsers };
