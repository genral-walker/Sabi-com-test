
import React from 'react';
import styles from './HomePage.module.css';

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


const HomePage = () => {

    return (
        <div className={styles.body}>

            <Header type='main'>Trollbasket</Header>

            <section id='header-nav'>
                <nav className={styles.headNav}>

                    <div>
                        <span> <LocationLogo /></span>
                        <select>
                            <option value="all">Locations</option>
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
                    <Cart description='Get comfy and comfortable with the new 2019 designer sneaker for all your events'/>
                    <Cart description='walker amen is the exponnetial duess and craps' />
                    <Cart description='walker tried this mhen'/>
                    <Cart description='walker tried this mhen'/>
                    <Cart description='walker tried this mhen'/>
                    <Cart description='walker tried this mhen'/>
                </section>
            </main>

            <Foot />
        </div>
    );
};

export default HomePage;
