import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ title , price , body , id }) => {
    return (
        <div className={'product-container'}>
            <h4 className={'product-title'}>{title}</h4>
            <p className={'product-body'}>{body}</p>
            <div className={'product-footer'}>
                <span className={'product-price'}>{price}</span>
                <Link className={'product-link'} to={`/product/${id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Product;