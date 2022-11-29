import axios from "axios"; 

const api = axios.create({
    baseURL: 'http://10.67.23.125:3333' // desenvolvimento
    //baseURL: 'https://www.onlinecloze.com.br/apionlinecloze' // produção onlinecloze.com.br:21242
});

export default api;