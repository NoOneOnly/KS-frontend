import axios from 'axios';
const BASE_URL = 'http://localhost:4500';
// const BASE_URL = 'https://spdsoftware-api.onrender.com';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content_Type': 'aplication/json' },
    withCredentials: true
});