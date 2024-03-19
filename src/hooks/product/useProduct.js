import { useQuery, useQueryClient } from "react-query";
import { getProducts } from "../../services/api/products/productsApis";

const useProduct = (key) => {
    const queryClient = useQueryClient();
    // we can not use select and initialData at the same time
    return useQuery(
        {
            queryKey: ["product", key],
            queryFn: getProducts,
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            refetchOnReconnect: true,
            cacheTime: 20000,
            select: (data) => {
                const products = data.data;
                const product = products?.find((product) => product.id === key);
                return product;
            },
            initialData: () => {
                // const products = queryClient.getQueryData(["products"]);
                // const product = products?.data?.find(
                //     (product) => product.id === key
                // );
                // return product;
            },
        }
    );
};

export default useProduct;
