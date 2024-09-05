import axios from "axios";

const pruebaApi = axios.create({
   baseURL: "https://gestion-hoteles-backend.onrender.com",
});



// para que el backend reciba el token constantemente
pruebaApi.interceptors.request.use((config)=> {
   config.headers = {
      'x-token': localStorage.getItem('token'),
   };
   return config;
});


 export default pruebaApi;