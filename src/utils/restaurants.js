import axios from "axios";
const URI = "https://smartorder-team-back.onrender.com";

async function getMyRestaurants(token) {
  try {
    const response = await axios.get(`${URI}/auth/myRestaurant`, {
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

export { getMyRestaurants };
