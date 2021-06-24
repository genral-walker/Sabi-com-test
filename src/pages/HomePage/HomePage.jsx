
import React from 'react';
import styles from './HomePage.module.css';

import Header from '../../components/Header/Header';
import { ReactComponent as LocationLogo } from '../../assets/svgs/location.svg';
import { ReactComponent as OrderLogo } from '../../assets/svgs/orders.svg';
import { ReactComponent as CartLogo } from '../../assets/svgs/cart.svg';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = () => {

    return (
        <div className={styles.body}>

            <Header type='main'>Trollbasket</Header>

            <div className={styles.headNav}>

                <div>
                    <span> <LocationLogo /></span>
                    <select>
                        <option value= "all">Locations</option>
                        <option value="abuja">Abuja</option>
                        <option value="lagos">Lagos</option>
                        <option value="benin">Benin</option>
                        <option value="kogi">Kogi</option>
                        <option value="rivers">Rivers</option>
                        <option value="delta">Delta</option>
                        <option value="niger">Niger</option>
                        <option value="kano">Kano</option>
                        <option value="benue">Benue</option>
                        <option value="jos">Jos</option>
                    </select>
                </div>

                <div>
                    <span> <OrderLogo /></span>
                    <p>My Orders</p>
                </div>

                <div>
                    <span> <CartLogo /></span>
                    <span className={styles.total}>9</span>
                    <p>Cart</p>
                </div>

            </div>

            <SearchBar />

        </div>
    );
};

export default HomePage;
