import React from 'react';
import styles from './Products.module.css';
import Product from '../../components/product/Product';
import { getProducts } from '../../services/api/products/productsApis';
import { useQuery } from 'react-query';

const Products = () => {
    const query = useQuery('products' , getProducts);
    const { data , isLoading } = query;

    return (
        <div className={styles.productsContainer}>
            {
                isLoading
                ?
                <h>Loading ...</h>
                :
                data.data.map(product => <Product key={product.id} {...product}/>)
            }
        </div>
    )
}

export default Products;