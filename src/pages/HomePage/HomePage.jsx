
import React, { useRef, useEffect } from 'react';
import styles from './HomePage.module.css';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';

import { ReactComponent as LocationLogo } from '../../assets/svgs/location.svg';
import { ReactComponent as OrderLogo } from '../../assets/svgs/orders.svg';
import { ReactComponent as CartLogo } from '../../assets/svgs/cart.svg';

import SearchBar from '../../components/SearchBar/SearchBar';
import Slider from '../../components/Slider/Slider';

import { ReactComponent as CategoryLogo } from '../../assets/svgs/products-categories.svg';
import { ReactComponent as HottLogo } from '../../assets/svgs/hot.svg';
import { ReactComponent as OkLogo } from '../../assets/svgs/ok.svg';
import { ReactComponent as ShopLogo } from '../../assets/svgs/shop.svg';

import Cart from '../../components/Cart/Cart';
import Foot from '../../components/Foot/Foot';
import Btn from '../../components/Btn/Btn';

import { useDispatch, useSelector } from 'react-redux';
import { refreshProducts } from '../../redux/search/searchActions';
import { searchByState } from '../../redux/search/searchActions';


const HomePage = () => {

    const history = useHistory();
    const filteredProducts = useSelector(state => state.search.filteredProducts);
    const selectedLocation = useSelector(state => state.search.currentLocation);
    const quantity = useSelector(state => state.cart.overallQuantity);
    const dispatch = useDispatch();
    const selectRef = useRef();


    useEffect(() => {
        // RESET STATES SELECT FILTER
        for (const opt of selectRef.current.options) {
            opt.removeAttribute('selected');
            if (opt.value === selectedLocation) {
                opt.setAttribute('selected', '');
            }
        }

    }, [selectedLocation])

    return (
        <div className={styles.body}>

            <Header type='main'>Trollbasket</Header>

            <section id='header-nav'>
                <nav className={styles.headNav}>

                    <div>
                        <span><LocationLogo /></span>
                        <select ref={selectRef} onChange={(e) => dispatch(searchByState(e.target.value))}>
                            <option value="all">Locations</option>
                            <option value="abuja">Abuja</option>
                            <option value="delta">Delta</option>
                            <option value="lagos">Lagos</option>
                            <option value="kano">Kano</option>
                        </select>
                    </div>

                    <div>
                        <span> <OrderLogo /></span>
                        <p>My Orders</p>
                    </div>

                    <div onClick={() => history.push('/cart-page')}>
                        <span> <CartLogo /></span>
                        <span className={styles.total}>{quantity}</span>
                        <p>Cart</p>
                    </div>
                </nav>

                <SearchBar />
            </section>

            <main>
                <Slider />

                <section className={styles.alerts}>
                    <div>
                        <div className={styles.pop1}>
                            <CategoryLogo />
                        </div>
                        <p> Product Categories</p>
                    </div>

                    <div>
                        <div className={styles.pop2}>
                            <HottLogo />
                        </div>
                        <p>Popular Products</p>
                    </div>

                    <div>
                        <div className={styles.pop3}>
                            <OkLogo />
                        </div>
                        <p>Recommened Products</p>
                    </div>

                    <div>
                        <div className={styles.pop4}>
                            <ShopLogo />
                        </div>
                        <p>Shops</p>
                    </div>
                </section>


                <section className={styles.carts}>
                    {
                        filteredProducts !== undefined && filteredProducts.length ?
                            filteredProducts.map(data => <Cart {...data} key={data.id} />) :
                            <div style={{ gridColumn: '1 / -1', margin: '1.5rem auto 2.5rem' }}>
                                <Header>
                                    <span style={{ marginRight: '1.5rem' }}>Sorry, No Such Product Found 😢</span>
                                    <span onClick={() => dispatch(refreshProducts())}><Btn type='banner'>OK</Btn></span>
                                </Header>
                            </div>
                    }
                </section>
            </main>

            <Foot />
        </div>
    );
};

export default HomePage;
