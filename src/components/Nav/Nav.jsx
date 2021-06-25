
import React from 'react';
import styles from './Nav.module.css';

import { ReactComponent as BackLogo } from '../../assets/svgs/back.svg';
import { ReactComponent as SearchLogo } from '../../assets/svgs/nav-search.svg';
import { ReactComponent as CartLogo } from '../../assets/svgs/cart.svg';

const Nav = ({ page }) => {

    return (
        <nav className={styles.nav}>

            <span><BackLogo /></span>
            
            <p>{page}</p>

            <div className={styles.cart}>
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