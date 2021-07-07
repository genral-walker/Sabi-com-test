
import React, { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { useHistory } from 'react-router-dom';


const Cart = (props) => {

    const history = useHistory();
    const { title, name, description, image, price, stock } = props;

    const [trimmedText, setTrimmedText] = useState();

    useEffect(() => {
        let str = description.split(' ');
        let newText = str.length <= 6 ? str.join(' ') + '.' : str.splice(0, 6).join(' ') + '...';
        setTrimmedText(newText);
    }, [description])

    return (
        <div className={styles.cart} onClick={() => history.push('/product')}>
            <div className={styles.image}>
                <img src={image} alt={`${title} ${name} Cart Item`} />
            </div>
            <div className={styles.details}>
                <p>{trimmedText}</p>
                <h3>₦{price}</h3>
                <p>MOQ {stock} (pieces)</p>
            </div>
        </div>
    )
};

export default Cart;
