
import React from 'react';
import styles from './CartPage.module.css';

import { useHistory } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';
import CartItem from '../../components/CartItem/CartItem';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';
import Btn from '../../components/Btn/Btn';
import Cart from '../../components/Cart/Cart';
import Foot from '../../components/Foot/Foot';
import Header from '../../components/Header/Header';


import { useSelector } from 'react-redux';

const CartPage = () => {

    const history = useHistory();
    const products = useSelector(state => state.cart.products);
    const cartLists = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);


    const truncateAmount = amount => {
        let decimalRounded = amount.toFixed(2);
        const value = `${decimalRounded}`.split('');

        let dotIndex = value.indexOf('.');
        while (dotIndex > 2) {
            dotIndex -= 3;
            dotIndex && value.splice(dotIndex, 0, ','); //Ensures it doesn't ass a comma when there's nothing at the front.
            console.log(value, dotIndex)
        }

        return value
    };

    return (
        <>
            <Nav page='Carts' />

            <section className={styles.carts}>
                {
                    cartLists.length ?
                        cartLists.map(obj => <CartItem key={obj.id} {...obj} />) :
                        <div style={{ margin: '1.5rem auto 2.5rem' }}>
                            <Header>
                                No item in cart. Add Item To cart to view your cart.
                            </Header>
                        </div>
                }

            </section>

            {
                cartLists.length > 0
                &&
                <section className={styles.total}>
                    <div>
                        <HeaderSecondary>Subtotal</HeaderSecondary>
                        <HeaderSecondary>N{truncateAmount(totalAmount)}</HeaderSecondary>
                    </div>

                    <div>
                        <HeaderSecondary>Total</HeaderSecondary>
                        <HeaderSecondary><span>N{truncateAmount(totalAmount)}</span></HeaderSecondary>
                    </div>

                    <span onClick={() => history.push('/checkout')}><Btn type='banner'>Checkout</Btn></span>
                </section>
            }


            <section className={styles.viewed}>
                <div>
                    <HeaderSecondary>Recently viewed</HeaderSecondary>
                    <HeaderSecondary><span>View all</span></HeaderSecondary>
                </div>

                <div>

                    {
                        products.map((product, idx) => idx <= 5 && <Cart {...product} key={product.id} />)
                    }

                </div>
            </section>

            <Foot />
        </>
    )
};

export default CartPage;