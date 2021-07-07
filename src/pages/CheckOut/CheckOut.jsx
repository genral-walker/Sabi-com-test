
import React from 'react';
import styles from './CheckOut.module.css';

import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import success from '../../assets/images/success.jpg';
import { useHistory } from 'react-router-dom';



const CheckOut = () => {

    const history = useHistory();

    return (

        <div className={styles.body}>
            <div>
                <img src={success} alt='Succesful' />

                <Header>Checkout Succesful</Header>
                <p>Your checkout is now successful.</p>
            </div>

            <span onClick={()=> history.push('/')}>
            <Btn>
                <HeaderSecondary>
                    <span>Got it</span>
                </HeaderSecondary>
            </Btn>
            </span>
           
        </div>
    )
}

export default CheckOut;
