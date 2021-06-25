
import React, { useEffect, useState} from 'react';
import styles from './Cart.module.css';

import {images, products} from '../../static';


const Cart = ({ description }) => {

    const [text, setText] = useState();

    useEffect(() => {
        let str = products[0].description.split(' ');
        let news = str.length <= 6 ? str.join(' ')+'.' : str.splice(0, 6).join(' ')+'...';
        setText(news)
    }, [])

    return (
        <div className={styles.cart}>
            <div className={styles.image}>
                <img src={products[0].image} alt='Cart Item' />
            </div>
            <div className={styles.details}>
                <p>{text}</p>
                <h3>{products[0].price}</h3>
                <p>MOQ {products[0].stock} (pieces)</p>
            </div>
        </div>
    )
};

export default Cart;
