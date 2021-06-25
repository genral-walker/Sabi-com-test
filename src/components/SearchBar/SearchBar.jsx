
import React from 'react';
import styles from './SearchBar.module.css';

import { ReactComponent as SearchLogo } from '../../assets/svgs/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import searchActionTypes from '../../redux/search/search.types';


const SearchBar = () => {

    const dispatch = useDispatch();

    const getValue = (event) => {
        event.preventDefault();
        // let val = event.target.value;
        dispatch({type: searchActionTypes.UPDATE_SEARCH});
    };

    return (
        <form className={styles.body} onSubmit={getValue}>
            <input placeholder='Search merchbuy' />
            <button type='submit'><SearchLogo /></button>
        </form>
    )
};

export default SearchBar;