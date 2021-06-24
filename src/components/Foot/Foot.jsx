
import React from 'react';
import styles from './Foot.module.css';

import { ReactComponent as HomeLogo } from '../../assets/svgs/home.svg';
import { ReactComponent as BuyLogo } from '../../assets/svgs/buy.svg';
import { ReactComponent as DealsLogo } from '../../assets/svgs/deals.svg';
import { ReactComponent as WalletLogo } from '../../assets/svgs/wallet.svg';
import { ReactComponent as MoreLogo } from '../../assets/svgs/more.svg';

const Foot = () => {

    return (
        <footer className={styles.foot}>

            <div>
                <HomeLogo />
                <p>Home</p>
            </div>

            <div>
            <BuyLogo />
                <p>Buy</p>
            </div>

            <div>
                <DealsLogo />
                <p>Deals</p>
            </div>

            <div>
                <WalletLogo />
                <p>Wallet</p>
            </div>

            <div>
                <MoreLogo />
                <p>More</p>
            </div>

        </footer>
    )
};

export default Foot;