import React, { useState } from 'react';
import styles from './Navbar.module.css';
import classNames from 'classnames';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { useProducts , usePostProducts } from '../../hooks/products/useProducts';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [title , setTitle] = useState('');
    const [price , setPrice] = useState('');
    const { refetch , isFetching } = useProducts();
    const { mutate: addNewProduct , isLoading , isSuccess } = usePostProducts();

    const addProduct = () => {
        if (title && price) {
            const body = {
                title,
                price,
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            }
            
            addNewProduct(body);
            setTitle('');
            setPrice('');
        }
    }

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.linkContainer}>
                <NavLink className={p => classNames(styles.navbarLink , p.isActive && styles.activeLink)} to={'/'}>Home</NavLink>
                <NavLink className={p => classNames(styles.navbarLink , p.isActive && styles.activeLink)} to={'/products'}>Products</NavLink>
                <NavLink className={p => classNames(styles.navbarLink , p.isActive && styles.activeLink)} to={'/infinite-scroll'}>Infinite Scroll</NavLink>
            </div>
            <div className='d-flex gap-3'>
                <Form.Control
                    type="text"
                    placeholder='title...'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <Form.Control
                    type="text"
                    placeholder='price...'
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />
                <button type="button" className="btn btn-secondary d-flex gap-2 align-items-center" 
                    onClick={addProduct}>
                    {
                        (isLoading || isFetching) 
                        ?
                        <Spinner animation="border" variant="light" size="sm"/>
                        :
                        'Create'  
                    }
                </button>
            </div>
            <button className={classNames('normal-button' , styles.navbarButton)}
                onClick={refetch}>
                refetch
            </button>
        </div>
    )
}

export default Navbar;