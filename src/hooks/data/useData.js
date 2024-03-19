import { useQueries } from "react-query";
import axios from 'axios';

const BASE_URL = 'http://localhost:3002';

const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response
    }
    catch (err) {}
}

const getRoles = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/roles`);
        return response;
    }
    catch (err) {}
}

const useData = () => {
   return useQueries([
        {
            queryKey: ['products'],
            queryFn: getProducts
        },

        {
            queryKey: ['roles'],
            queryFn: getRoles
        }
   ])
}

export default useData;