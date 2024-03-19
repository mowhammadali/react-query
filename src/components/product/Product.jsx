import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ title , price , image , description , id }) => {
    return (
        <div className={'product-container'}>
            <div>
                <h4 className={'product-title'}>{title}</h4>
                <img className='product-img' src={image}/>
            </div>
            <p className={'product-body'}>{description}</p>
            <div className={'product-footer'}>
                <span className={'product-price'}>{price}$</span>
                <Link className={'product-link'} to={`/product/${id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Product;