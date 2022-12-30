import axios from 'axios';

export const fetchProducts = () => axios.get(`https://gibbys-galleria.onrender.com/menu`);
