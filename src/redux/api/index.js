import axios from 'axios';

export const fetchProducts = () => axios.get(`https://gibbys-galleria.herokuapp.com/menu`);