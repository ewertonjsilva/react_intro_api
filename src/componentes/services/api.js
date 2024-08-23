import axios from "axios"; 

const api = axios.create({
    baseURL: 'http://10.67.23.125:3333' // desenvolvimento
   });

export default api;
