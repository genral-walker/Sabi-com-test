
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
    // const cartLists = useSelector(state => state.cart.cartItems);

    // Static cartlist to be removed once cart cart state is reloved.
    const cartLists = [
        {
            "id": "74bde35-26c0-5d8b-f65-38dbcf4bcfffef",
            "title": "SANDALS",
            "name": "Yexzy 4",
            "description": "Apparel product. Comes with warranty and delivery to your destination.",
            "image": "https://github.com/genral-walker/9ijakids-Game-List/blob/main/src/static/cart-6.jpg?raw=true",
            "location": "lagos",
            "price": 4200,
            "stock": 11
        },
        {
            "id": "8871ff-3c8d-6efb-44d0-f36487f6147d",
            "title": "JERSEY",
            "name": "Puma yeexy x",
            "description": "The new 2019 product yet to see.",
            "image": "https://github.com/genral-walker/9ijakids-Game-List/blob/main/src/static/cart-2.jpg?raw=true",
            "location": "lagos",
            "price": 14000,
            "stock": 8
        },
        {
            "id": "f63f76-3dea-0ec-3d8-347e2ebb4e7e",
            "title": "COKE",
            "name": "Nontanomo expose",
            "description": "Redeine your space with this new product that encompasses all your needs in this space of yours.",
            "image": "https://github.com/genral-walker/9ijakids-Game-List/blob/main/src/static/cart-10.jpg?raw=true",
            "location": "lagos",
            "price": 3000,
            "stock": 17
        },
        {
            "id": "dfdb1d6-5870-5442-578f-d5f2a24c7a27",
            "title": "PUMA",
            "name": "Yexzy 4",
            "description": "Designer sneaker for all your events.",
            "image": "https://github.com/genral-walker/9ijakids-Game-List/blob/main/src/static/cart-1.jpg?raw=true",
            "location": "lagos",
            "price": 1600,
            "stock": 35
        },
    ];

    return (
        <>
            <Nav page='Carts' />

            <section className={styles.carts}>
                {
                    cartLists.length ?
                        cartLists.map(obj => <CartItem key={obj.id} {...obj} />) :
                        <div style={{ margin: '1.5rem auto 2.5rem' }}>
                            <Header>
                                No Item in Cart yet.
                            </Header>
                        </div>
                }

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

                <span onClick={() => history.push('/checkout')}><Btn type='banner'>Checkout</Btn></span>
            </section>

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