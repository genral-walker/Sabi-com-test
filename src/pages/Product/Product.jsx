
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Product.module.css';

import Nav from '../../components/Nav/Nav';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import { ReactComponent as ForwardLogo } from '../../assets/svgs/forward.svg';
import { ReactComponent as StarYellow } from '../../assets/svgs/star-yellow.svg';
import { ReactComponent as StarLogo } from '../../assets/svgs/star.svg';
import profile from '../../assets/images/cart-2.jpg';
import { ReactComponent as CancelLogo } from '../../assets/svgs/cancel.svg';
import ButtonsFooter from '../../components/ButtonsFooter/ButtonsFooter';


const Product = ({ match }) => {
    const allProducts = useSelector(state => state.cart.products);
    const cartItems = useSelector(state => state.cart.cartItems);
    const productOutOfStock = useSelector(state => state.cart.outOfStock);

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
    const [alertBoxClass, setAlertBoxClass] = useState(`${styles.added}`)

    // USED FOR THE POPUP 
    const updateAlertBoxClass = () => {
        if (productOutOfStock) {
            setAlertBoxClass(`${styles.added} ${styles.show}`);
            setTimeout(() => {
                setAlertBoxClass(`${styles.added}`)
            }, 7000);
        } else {
            setAlertBoxClass(`${styles.added}`)
        }
    };


    useEffect(() => {
        setAvailableStock(isStockAvailabe(product));

        updateAlertBoxClass();

    }, [cartItems])

    return (
        <>
            <Nav page='Details' />

            <div ref={alertBoxRef} className={alertBoxClass}>
                <p>Item added to cart successfully</p>
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
