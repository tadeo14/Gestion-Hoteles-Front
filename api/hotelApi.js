import axios from "axios";

 const hotelApi = axios.create({
    baseURL: "http://localhost:4000"
 })

 export default hotelApi;