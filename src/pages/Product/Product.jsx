
import React, { useEffect, useState } from 'react';
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
    const products = useSelector(state => state.cart.products);

    const [product, setProduct] = useState({});

    useEffect(() => {
        products.forEach(product => product.id === match.params.id && (setProduct(product)));
        
    }, [])

    return (
        <>
            <Nav page='Details' />

            <div className={styles.added}>
                <p>Item added to cart successfully</p>
                <CancelLogo />
            </div>


            <section className={styles.image}>
                <img src={product.image} alt={`${product.title} ${product.name}`} />
            </section>


            <section className={styles.info}>
                <p>{product.title} {product.name}</p>
                <p>
                    {product.description}
                    <br />
                    {product.stock === 1 ? '1 Stock left' : `${product.stock} Stocks left`}.
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
