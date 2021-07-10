
import React, { useRef } from 'react';
import styles from './CartItem.module.css';

import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import { ReactComponent as Delete } from '../../assets/svgs/delete.svg';
import { ReactComponent as Add } from '../../assets/svgs/Plus.svg';
import { ReactComponent as Minus } from '../../assets/svgs/minus.svg';
import { useDispatch } from 'react-redux';
import { decrementQuantity, deleteProduct, IncrementQuantity } from '../../redux/cart/cartActions';


const CartItem = ({ title, name, image, price, realPrice, id, quantityPurchased }) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.body} id={id}>

            <div className={styles.top}>

                <img src={image} alt={`${title} ${name}`} />

                <div className={styles.text}>
                    <p>{title} {name}</p>
                    <HeaderSecondary>N{realPrice ? realPrice : price}</HeaderSecondary>
                </div>

            </div>
            <div className={styles.bottom}>

                <div onClick={() => dispatch(deleteProduct(id))}>
                    <Delete />
                    <p>Delete</p>
                </div>

                <div>
                    <Minus onClick={() => dispatch(decrementQuantity(id))} />
                    <p>{quantityPurchased}</p>
                    <Add onClick={() => dispatch(IncrementQuantity(id))} />
                </div>
            </div>
        </div>
    )
};

export default CartItem;

