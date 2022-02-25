import axios from 'axios';

export const key = "d388f5637256e7882e0e3842e1bdd2ab116e68bf";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
     headers:{
        'Authorization': `Bearer ${key}`
     }
})

export default api;