
import React from 'react';
import styles from './Btn.module.css';


const Btn = ({ children, type }) => {

    const checkType = type => {
        switch (type) {
            case 'banner':
                return `${styles.btn} ${styles.banner}`

            case 'inverted':
                return `${styles.btn} ${styles.inverted}`

            default:
                return `${styles.btn}`
        }
    };

    return <button className={`${checkType(type)}`}>{children}</button>

}

export default Btn;
