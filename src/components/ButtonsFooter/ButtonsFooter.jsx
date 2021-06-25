
import React from 'react';
import styles from './ButtonsFooter.module.css';

import Btn from '../../components/Btn/Btn';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary'; 


const ButtonsFooter = () => {

    return (
        <div className={styles.body}>
            <Btn type='default'>
                <HeaderSecondary>Add to cart</HeaderSecondary>
            </Btn>
            <Btn type='inverted'>
                <HeaderSecondary>Wishlist</HeaderSecondary>
            </Btn>
        </div>
    )
};

export default ButtonsFooter;
