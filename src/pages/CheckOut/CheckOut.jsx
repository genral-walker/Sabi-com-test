
import React, { useEffect } from 'react';
import styles from './CheckOut.module.css';

import Btn from '../../components/Btn/Btn';
import Header from '../../components/Header/Header';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import success from '../../assets/images/success.jpg';

import uuid from 'react-uuid';


const CheckOut = () => {

    
    useEffect(()=>{
        const products = [{
            id: uuid(),
            title: 'NIKE',
            name: 'NIKE Huararche 2019',
            description: 'Get comfy and comfortable with the new 2019 designer sneaker for all your events',
            image: 'some_image_link',
            price: '45, 000 - 90, 000',
            location: 'Lagos',
            stock: 5
        }];
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
