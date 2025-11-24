import axios from "axios";
const URI = "http://localhost:5102";

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
  //   const data = data;

  try {
    const response = await axios.post(`${URI}/login`, data);
    console.log(response.data);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.rol);
    return true;
  } catch (error) {
    console.error("Error en el login:", error.response?.data || error.message);
    return false;
  }
}

async function userData(token) {
  
  try {
    const response = await axios.get(`${URI}/userData`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error en el login:", error.response?.data || error.message);
    return false;
  }
}

async function users() {
  const data = data;

  axios.post(URI + "/login", { data });
}

export { sing_in, login, userData, users };
