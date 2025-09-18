import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3001/api", // your backend
});

export default apiInstance;
