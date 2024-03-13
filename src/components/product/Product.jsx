import React from 'react';
import styles from './Product.module.css';
import { Link } from 'react-router-dom';

const Product = ({ title , price , body , id }) => {
    return (
        <div className={styles.productContainer}>
            <h4 className={styles.productTitle}>{title}</h4>
            <p className={styles.productBody}>{body}</p>
            <div className={styles.productFooter}>
                <span className={styles.productPrice}>{price}</span>
                <Link className={styles.productLink} to={'/'}>Details</Link>
            </div>
        </div>
    )
}

export default Product;