import React from 'react';
import useProduct from '../../hooks/product/useProduct';
import classNames from 'classnames';
import styles from './Details.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Details = () => {
    let { productId } = useParams();

    const { data , isLoading } = useProduct(productId);
  
    if (isLoading) return <h1>Loading ...</h1>
    
    return (
        <div className={classNames('product-container' , styles.container)}>
            <div>
                <h4 className={'product-title'}>{data?.title}</h4>
                <img className='product-img' src={data?.image}/>
            </div>
            <p className={'product-body'}>{data?.description}</p>
            <div className={'product-footer'}>
                <span className={'product-price'}>{data?.price}$</span>
                <Link className={'product-link'} to={`/products`}>Back</Link>
            </div>
        </div>
    )
}

export default Details;