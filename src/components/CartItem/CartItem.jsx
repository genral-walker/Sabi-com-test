
import React from 'react';
import styles from './CartItem.module.css';


import cartFoto from '../../assets/images/cart-3.jpg';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import { ReactComponent as Delete } from '../../assets/svgs/delete.svg';
import { ReactComponent as Add } from '../../assets/svgs/Plus.svg';
import { ReactComponent as Minus } from '../../assets/svgs/minus.svg';



const CartItem = ({ title, name, image, price, id }) => {

    return (
        <div className={styles.body} id={id}>

            <div className={styles.top}>

                <img src={image} alt={`${title} ${name}`} />

                <div className={styles.text}>
                    <p>{title} {name}</p>
                    <HeaderSecondary>N{price}</HeaderSecondary>
                </div>

            </div>
            <div className={styles.bottom}>

                <div>
                    <Delete />
                    <p>Delete</p>
                </div>

                <div>
                    <Minus />
                    <p>24</p>
                    <Add />
                </div>
            </div>
        </div>
    )
};

export default CartItem;

