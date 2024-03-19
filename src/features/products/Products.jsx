import React from 'react';
import styles from './Products.module.css';
import Product from '../../components/product/Product';
import useProducts from '../../hooks/products/useProducts';

const Products = () => {
    const query = useProducts();
    const { data , isLoading } = query;

    return (
        <div className={styles.productsContainer}>
            {
                isLoading
                ?
                <h1>Loading ...</h1>
                :
                data?.map(product => <Product key={product.id} {...product}/>)
            }
        </div>
    )
}

export default Products;