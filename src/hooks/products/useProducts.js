import { useQuery } from 'react-query';
import { getProducts } from '../../services/api/products/productsApis';

const useProducts = () => {
    return useQuery(
        {
            queryKey: ['products'],
            queryFn: getProducts,
            refetchOnMount: true,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            cacheTime: 10000,
            select: data => data.data,
            onSuccess: data => {
                console.log('successfull' , data);
            },
            onError: error => {
                console.log('error' , error);
            }
        }
    )
}

export default useProducts;