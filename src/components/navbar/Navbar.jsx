import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <Link className={styles.navbarLink} to={'/'}>Home</Link>
            <Link className={styles.navbarLink} to={'/products'}>Products</Link>
        </div>
    )
}

export default Navbar;