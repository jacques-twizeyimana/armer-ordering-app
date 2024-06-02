// create and export axios instance with base url and headers
import axios from "axios";

const appAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default appAxios;
