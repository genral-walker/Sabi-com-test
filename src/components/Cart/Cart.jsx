
import React, { useEffect, useState} from 'react';
import styles from './Cart.module.css';

import shoePic from '../../assets/images/cart-3.jpg';


const Cart = ({ description }) => {

    const [text, setText] = useState();

    useEffect(() => {
        let str = description.split(' ');
        let news = str.length <= 6 ? str.join(' ')+'.' : str.splice(0, 6).join(' ')+'...';
        setText(news)
    }, [ ])

    return (
        <div className={styles.cart}>
            <div className={styles.image}>
                <img src={shoePic} alt='Cart Item' />
            </div>
            <div className={styles.details}>
                <p>{text}</p>
                <h3>₦900 - ₦1,500</h3>
                <p>MOQ 4 (pieces)</p>
            </div>
        </div>
    )
};

export default Cart;
