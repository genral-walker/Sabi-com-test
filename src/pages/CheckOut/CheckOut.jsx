
import React, { useEffect } from 'react';
import styles from './CheckOut.module.css';

import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import success from '../../assets/images/success.jpg';
import { images, products } from '../../static';



const CheckOut = () => {

    useEffect(() => {
       
        console.log(products);
    }, [])

    return (

        <div className={styles.body}>
            <div>
                <img src={success} alt='Succesful' />

                <Header>Checkout Succesful</Header>
                <p>Your checkout is now successful.</p>
            </div>

            <Btn>
                <HeaderSecondary>
                    <span>Got it</span>
                </HeaderSecondary>
            </Btn>
        </div>
    )
}

export default CheckOut;
