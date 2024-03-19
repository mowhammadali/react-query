import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ title , price , image , description , page , pageSize , id }) => {
    const navigate = useNavigate();
    const redirect = () => navigate(`/product/${id}` , {state: {page , pageSize}});

    return (
        <div className={'product-container'}>
            <div>
                <h4 className={'product-title'}>{title}</h4>
                <img className='product-img' src={image}/>
            </div>
            <p className={'product-body'}>{description}</p>
            <div className={'product-footer'}>
                <span className={'product-price'}>{price}$</span>
                <div className={'product-link'} onClick={redirect}>Details</div>
            </div>
        </div>
    )
}

export default Product;