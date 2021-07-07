
import React, { useRef } from 'react';
import styles from './SearchBar.module.css';

import { ReactComponent as SearchLogo } from '../../assets/svgs/search.svg';

import { useDispatch } from 'react-redux';
import { searchProduct } from '../../redux/search/searchActions';


const SearchBar = () => {

    const dispatch = useDispatch();
    const inputRef = useRef();

    const getValue = (event) => {
        event.preventDefault();
        dispatch(searchProduct(inputRef.current.value));
        event.target.reset();
    };

    return (
        <form className={styles.body} onSubmit={getValue}>
            <input ref={inputRef} placeholder='Search merchbuy' />
            <button type='submit'><SearchLogo /></button>
        </form>
    )
};

export default SearchBar;