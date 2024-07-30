import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE
})

export default axiosConfig