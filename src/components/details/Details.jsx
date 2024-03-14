import React from 'react';
import useProducts from '../../hooks/products/useProducts';
import classNames from 'classnames';
import styles from './Details.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Details = () => {
    let { productId } = useParams();

    const { data , isLoading } = useProducts(productId);

    const matchedProduct = data?.find(product => product.id === productId);

    if (isLoading) return <h1>Loading ...</h1>
    
    return (
        <div className={classNames('product-container' , styles.container)}>
            <h4 className={'product-title'}>{matchedProduct.title}</h4>
            <p className={'product-body'}>{matchedProduct.body}</p>
            <div className={'product-footer'}>
                <span className={'product-price'}>{matchedProduct.price}</span>
                <Link className={'product-link'} to={`/products`}>Back</Link>
            </div>
        </div>
    )
}

export default Details;