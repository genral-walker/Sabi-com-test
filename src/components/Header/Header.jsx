
import React from 'react';
import styles from './Header.module.css';

const isMainHeader = type => {
    return type === 'main' ? `${styles.header} ${styles.main}` : `${styles.header}`;
}

const Header = ({ children, type }) => <h2 className={isMainHeader(type)}>{children}</h2>;

export default Header;

