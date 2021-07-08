
import React from 'react';
import styles from './CheckOut.module.css';

import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import success from '../../assets/images/success.jpg';


const CheckOut = () => {

    return (

        <div className={styles.body}>
            <div>
                <img src={success} alt='Checkout Succesful' />

                <Header>Checkout Succesful</Header>
                <p>Your checkout is now successful.</p>
            </div>

            <Btn forCheckOut>
                <HeaderSecondary>
                    <span>Got it</span>
                </HeaderSecondary>
            </Btn>
        </div>
    )
}

export default CheckOut;
