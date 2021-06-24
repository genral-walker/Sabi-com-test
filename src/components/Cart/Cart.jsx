
import React from 'react';
import styles from './Cart.module.css';

import shoePic from '../../assets/images/Rectangle-3.jpg';


const Cart = () => {

    return (
        <div className={styles.cart}>
            <div className={styles.image}>
                <img src={shoePic} alt='Cart Item' />
            </div>
            <div className={styles.details}>
            <p>Free sample small tote bag gucci fen...</p>
            <h3>₦900 - ₦1,500</h3>
            <p>MOQ 4 (pieces)</p>
            </div>
        </div>
    )
};

export default Cart;
