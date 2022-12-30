import axios from 'axios';

export const fetchProducts = () => axios.get(`https://bills-pizza-palace.onrender.com/menu`);
