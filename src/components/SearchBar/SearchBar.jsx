
import React from 'react';
import styles from './SearchBar.module.css';

import { ReactComponent as SearchLogo } from '../../assets/svgs/search.svg';

const SearchBar =()=>{

    return (
        <div className={styles.body}>
            <input placeholder='Search merchbuy' />
            <div><SearchLogo /></div>
        </div>
    )
};

export default SearchBar;