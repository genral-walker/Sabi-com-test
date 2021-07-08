
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cart/cartActions';
import styles from './Btn.module.css';


const Btn = ({ children, type, forAddingCart, forCheckOut }) => {

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

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

    const disperseFunction = () => {
        if (forAddingCart) dispatch(addToCart(params.id));
        if (forCheckOut) history.push('/');
    };


    return <button className={`${checkType(type)}`} onClick={disperseFunction}>{children}</button>

}

export default Btn;
