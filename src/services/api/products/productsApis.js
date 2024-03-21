import axios from 'axios';
const BASE_URL = 'http://localhost:3002';

export const getProducts = async (page , pageSize) => {
    try {
        const response = await axios.get(`${BASE_URL}/products?_page=${page}&_per_page=${pageSize}`);
        return response;
    }
    catch (error) { }
}

export const postProduct = async (product) => {
    try {
        const response = await axios.post(`${BASE_URL}/products` , product);
        return response;
    }
    catch (error) { }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/products/${id}`)
    }
    catch (error) { }
}