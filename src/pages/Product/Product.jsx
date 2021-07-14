
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Product.module.css';

import Nav from '../../components/Nav/Nav';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import { ReactComponent as ForwardLogo } from '../../assets/svgs/forward.svg';
import { ReactComponent as StarYellow } from '../../assets/svgs/star-yellow.svg';
import { ReactComponent as StarLogo } from '../../assets/svgs/star.svg';
import profile from '../../assets/images/cart-2.jpg';
import { ReactComponent as CancelLogo } from '../../assets/svgs/cancel.svg';
import ButtonsFooter from '../../components/ButtonsFooter/ButtonsFooter';
import { hidePopUp } from '../../redux/cart/cartActions';


const Product = ({ match }) => {
    const allProducts = useSelector(state => state.cart.products);
    const cartItems = useSelector(state => state.cart.cartItems);
    const productOutOfStock = useSelector(state => state.cart.outOfStock);
    const shouldShowAlert = useSelector(state => state.cart.showPopUpOnClick);

    const dispatch = useDispatch();

    const alertBoxRef = useRef();

    const product = allProducts.find(product => product.id === match.params.id);

    // USED IN UI FOR THE LAST PARAGRAPH OF THE DESCRIPTION.
    const isStockAvailabe = product => {
        if (!product.quantityPurchased) {
            return `${product.stock} Stocks Left.`;
        } else if (product.quantityPurchased) {
            const value = product.stock - product.quantityPurchased;
            return value === 1 ? `${value} Stock Left.` :
                value === 0 ? 'No Stock Left.' : `${value} Stocks Left.`;
        }
    };

    const [availableStock, setAvailableStock] = useState(() => isStockAvailabe(product));
    const [alertBoxClass, setAlertBoxClass] = useState(`${styles.added}`);
    const [alertText, setAlertText] = useState('Item added to cart successfully.');

    // USED FOR THE POPUP 
    const updateAlertBoxData = () => {
        if (productOutOfStock) {
            setAlertText('Cannot add product. Product out of stock.');
            setAlertBoxClass(`${styles.added} ${styles.show}`);
            setTimeout(() => {
                setAlertBoxClass(`${styles.added}`);
            }, 7000);
        } else {
            setAlertText('Item added to cart successfully.');
            setAlertBoxClass(`${styles.added}`);
        }
    };

    // UPDATE UI OF PRODUCT STOCK AND ALERT POPUP
    useEffect(() => {
        setAvailableStock(isStockAvailabe(product));

        updateAlertBoxData();

    }, [cartItems]);

    // TO TRIGGER POPUP ON BTN ADD TO CART CLICK
    useEffect(() => {
        if (shouldShowAlert) {
            setAlertBoxClass(`${styles.added} ${styles.show}`);

            setTimeout(() => {
                setAlertBoxClass(`${styles.added}`);
                dispatch(hidePopUp())
            }, 1500);
        }
    }, [shouldShowAlert])

    return (
        <>
            <Nav page='Details' />

            <div ref={alertBoxRef} className={alertBoxClass}>
                <p>{alertText}</p>
                <CancelLogo onClick={() => setAlertBoxClass(`${styles.added}`)} />
            </div>


            <section className={styles.image}>
                <img src={product.image} alt={`${product.title} ${product.name}`} />
            </section>


            <section className={styles.info}>
                <p>{product.title} {product.name}</p>
                <p>
                    {product.description}
                    <br />
                    {availableStock}
                </p>

                <span>
                    <h3>N{product.price}</h3> <span>/Piece</span>
                </span>
            </section>


            <section className={styles.description}>
                <HeaderSecondary>Product Description</HeaderSecondary>
                <ForwardLogo />
            </section>


            <section className={styles.ratings}>
                <div className={styles.review}>
                    <HeaderSecondary>Review and Ratings</HeaderSecondary>
                    <HeaderSecondary>View all</HeaderSecondary>
                </div>

                <div className={styles.stars}>
                    <div>
                        <StarYellow />
                        <StarYellow />
                        <StarYellow />
                        <StarLogo />
                        <StarLogo />
                    </div>

                    <HeaderSecondary>3.0</HeaderSecondary>
                </div>

                <p>This is the best product I have used in a long while and the
                    size fits perfectly and I love the colors!!!!!</p>

                <div className={styles.profile}>
                    <img src={profile} alt='reviewer Profile' />
                    <HeaderSecondary>Segun Arinze</HeaderSecondary>
                </div>
            </section>

            <ButtonsFooter />
        </>
    )
};

export default Product;
