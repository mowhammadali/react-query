import axios from 'axios';
const BASE_URL = 'http://localhost:3002';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response;
    }
    catch (error) {
        
    }
}