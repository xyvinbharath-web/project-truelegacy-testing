import axios from "axios";

const baseURL = import.meta.env.VITE_APP_API_URL;
const apiKey = import.meta.env.VITE_APP_API_KEY;

// Debug: Log environment variables
console.log("API URL:", baseURL);
console.log("API Key:", apiKey ? "SET" : "NOT SET");

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const successionData = JSON.parse(localStorage.getItem("successionData"));
    const token = successionData?.temporary_user?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["x-api-key"] = apiKey;
    config.headers["ngrok-skip-browser-warning"] = "true";
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
