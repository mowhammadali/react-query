import React from 'react';
import styles from './Navbar.module.css';
import classNames from 'classnames';
import useProducts from '../../hooks/products/useProducts';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { refetch } = useProducts();

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.linkContainer}>
                <NavLink className={p => classNames(styles.navbarLink , p.isActive && styles.activeLink)} to={'/'}>Home</NavLink>
                <NavLink className={p => classNames(styles.navbarLink , p.isActive && styles.activeLink)} to={'/products'}>Products</NavLink>
            </div>
            <button className={classNames('normal-button' , styles.navbarButton)}
                onClick={refetch}>
                refetch
            </button>
        </div>
    )
}

export default Navbar;