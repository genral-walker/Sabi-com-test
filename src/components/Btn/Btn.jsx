
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addToCart, showPopUp, stockFinished } from '../../redux/cart/cartActions';
import styles from './Btn.module.css';


const Btn = ({ children, type, forAddingCart, forCheckOut }) => {

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const allProducts = useSelector(state => state.cart.products);
    const product = allProducts.find(product => product.id === params.id);


    const checkType = type => {
        switch (type) {
            case 'banner':
                return `${styles.btn} ${styles.banner}`

            case 'inverted':
                return `${styles.btn} ${styles.inverted}`

            default:
                return `${styles.btn}`
        }
    };

    // USED TO SHOW THE POPUP ONCE NO MORE STOCK AND AFTER A SECOND CLICK ON BTN  
    const [clickCount, setClickCount] = useState(0);
    const disperseFunction = () => {

        if (forAddingCart) {
            dispatch(addToCart(params.id));
            dispatch(showPopUp());

            if (product.quantityPurchased === product.stock) {
                setClickCount(prev => prev + 1);
                if (clickCount === 1) {
                    setClickCount(1);
                }
            }
        };

        if (forCheckOut) history.push('/');
    };

    useEffect(() => {
        // TO ALLOW POPUP SHOW WHEN BUTTON IS REMOUNTED AND THERE'S NO MORE STOCK
        if (forAddingCart) {
            if (product.quantityPurchased === product.stock) {
                setClickCount(1);
            };

            return () => dispatch(stockFinished(false));
        }
    }, []);

    // UPDATE GENERAL STATE THAT THERE'S NO MORE STOCK. TO BE USED ONLY IN PRODUCT PAGE FOR POPUP
    useEffect(() => {
        if (forAddingCart) {
            clickCount === 1 && dispatch(stockFinished(true))
        }
    }, [clickCount])

    return <button className={`${checkType(type)}`} onClick={disperseFunction}>{children}</button>

}

export default Btn;
