import { useQuery , useMutation , useQueryClient  } from 'react-query';
import { getProducts , postProduct , deleteProduct } from '../../services/api/products/productsApis';

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

const usePostProducts = () => {
    const queryClient = useQueryClient();

    return useMutation(product =>  {
        return postProduct(product);
    }, 
    {
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        }
    })
}

const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation(id => {
        return deleteProduct(id);
    },
    {
        onSuccess: (response , id) => {
            queryClient.invalidateQueries(['products']);
            
            // const products = queryClient.getQueryData(['products']);
            // const newProducts = products.data.filter(product => product.id !== id);
            // console.log(newProducts);
            // queryClient.setQueryData(['products'] , newProducts);
        }
    })
}

export { useProducts , usePostProducts , useDeleteProduct};