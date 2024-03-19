import { useQuery } from 'react-query';
import { getProducts } from '../../services/api/products/productsApis';

const useProducts = (page , pageSize) => {
    return useQuery(
        {
            queryKey: ['products' , page],
            queryFn: () => getProducts(page , pageSize),
            refetchOnMount: true,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            cacheTime: 8000,
            select: data => data.data,
            onSuccess: data => {
                // console.log('successfull' , data);
            },
            onError: error => {
                // console.log('error' , error);
            }
        }
    )
}

export default useProducts;