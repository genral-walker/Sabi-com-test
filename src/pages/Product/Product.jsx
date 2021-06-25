
import React from 'react';
import styles from './Product.module.css';

import Nav from '../../components/Nav/Nav';
import productImg from '../../assets/images/shoe-1.jpg';
import HeaderSecondary from '../../components/HeaderSecondary/HeaderSecondary';

import { ReactComponent as ForwardLogo } from '../../assets/svgs/forward.svg';
import { ReactComponent as StarYellow } from '../../assets/svgs/star-yellow.svg';
import { ReactComponent as StarLogo } from '../../assets/svgs/star.svg';
import profile from '../../assets/images/sneaker-2.jpg';
import { ReactComponent as CancelLogo } from '../../assets/svgs/cancel.svg'; 
import ButtonsFooter from '../../components/ButtonsFooter/ButtonsFooter'; 


const Product = ({ productName }) => {
       
    return (
        <>
            <Nav page='Details' />

            <div className={styles.added}>
            <p>Item added to cart successfully</p>
            <CancelLogo />
            </div>


            <section className={styles.image}>
                <img src={productImg} alt={productName} />
            </section>


            <section className={styles.info}>
                <p>NIKE Huararche 2019</p>
                <p>Get comfy and comfortable with the new 2019 designer
                    sneaker for all your events </p>

                <span>
                    <h3>N45,000 - N80,000</h3> <span>/Piece</span>
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
