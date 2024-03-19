import axios from 'axios';
const BASE_URL = 'http://localhost:3002';

export const getProducts = async (page , pageSize) => {
    try {
        const response = await axios.get(`${BASE_URL}/products?_page=${page}&_per_page=${pageSize}`);
        return response;
    }
    catch (error) {
        
    }
}