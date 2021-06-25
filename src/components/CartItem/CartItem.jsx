
import React from 'react';
import styles from './CartItem.module.css';


import cartFoto from '../../assets/images/sneaker-3.jpg';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import { ReactComponent as Delete } from '../../assets/svgs/delete.svg';
import { ReactComponent as Add } from '../../assets/svgs/Plus.svg';
import { ReactComponent as Minus } from '../../assets/svgs/minus.svg';



const CartItem = () => {

    return (
        <div className={styles.body}>

            <div className={styles.top}>

                <img src={cartFoto} alt='Product Name' />

                <div className={styles.text}>
                    <p>2019 Vintage Coca Cola</p>
                    <HeaderSecondary>N18,099.09</HeaderSecondary>
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

