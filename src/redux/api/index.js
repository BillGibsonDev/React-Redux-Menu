import axios from 'axios';

export const fetchProducts = async () => { 
    try {
        await axios.get(`https://gibbys-pizzeria.onrender.com/menu`)
    }
    catch(err) {
        console.log(err);
        setTimeout(() => {
            fetchProducts();
        }, 1000 * 60)
    }
};