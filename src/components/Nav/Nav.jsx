
import React from 'react';
import styles from './Nav.module.css';

import { ReactComponent as BackLogo } from '../../assets/svgs/back.svg';
import { ReactComponent as SearchLogo } from '../../assets/svgs/nav-search.svg';
import { ReactComponent as CartLogo } from '../../assets/svgs/cart.svg';

const Nav = ({ page }) => {

    return (
        <nav className={styles.nav}>

            <span><BackLogo /></span>

            <p style={{marginLeft: page === 'Carts' ? '4.5rem': 0}}>{page}</p>

            <div className={styles.cart} style={{visibility: page === 'Carts' ? 'hidden': 'visible'}}>
                 <span><SearchLogo /></span>

                <div className={styles.search}>
                    <span> <CartLogo /></span>
                    <span className={styles.total}>9</span>
                </div>
            </div>
        </nav>
    )
};

export default Nav;