
import React from 'react';
import styles  from './CartPage.module.css';

import Nav from '../../components/Nav/Nav';
import CartItem from '../../components/CartItem/CartItem';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';
import Btn from '../../components/Btn/Btn';
import Cart from '../../components/Cart/Cart';
import Foot from '../../components/Foot/Foot';



const CartPage =()=>{

    return (
        <>
        <Nav page='Carts' />

        <section className={styles.carts}>
        <CartItem />
        <CartItem />
        <CartItem />
        </section>

        <section className={styles.total}>
        <div>
        <HeaderSecondary>Subtotal</HeaderSecondary>
        <HeaderSecondary>N18,099.09</HeaderSecondary>
        </div>

        <div>
        <HeaderSecondary>Total</HeaderSecondary>
        <HeaderSecondary><span>N18,099.09</span></HeaderSecondary>
        </div>

        <Btn type='banner'>Checkout</Btn>
        </section>

        <section className={styles.viewed}>
        <div>
        <HeaderSecondary>Recently viewed</HeaderSecondary>
        <HeaderSecondary><span>View all</span></HeaderSecondary>
        </div>

        <div>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        </div>
        </section>

        <Foot />
        </>
    )
};

export default  CartPage;