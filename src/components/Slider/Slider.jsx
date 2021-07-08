
import React from "react";
import styles from "./Slider.module.css";
import Btn from '../Btn/Btn';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper/core";
SwiperCore.use([Autoplay]);


const Slider = () => {

    return (
        <div className={styles.body}>
            <Swiper
                spaceBetween={15}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3700,
                    disableOnInteraction: false,
                }}
                pauseOnMouseEnter={true}
                className="mySwiper">
                <SwiperSlide>
                    <div className={`${styles.slider} ${styles.slide1}`}>
                        <div>
                            <h2>Having any <span>issues</span> with your order?</h2>
                            <Btn type='banner'>Contact Us</Btn>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide active>
                    <div className={`${styles.slider} ${styles.slide2}`}>
                        <div>
                            <h2>Purchase all your <span>needs</span> from us</h2>
                            <Btn type='banner'>Browse Now</Btn>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`${styles.slider} ${styles.slide3}`}>
                        <div>
                            <h2>We have you <span>covered</span> wherever you are</h2>
                            <Btn type='banner'>Contact Us</Btn>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
