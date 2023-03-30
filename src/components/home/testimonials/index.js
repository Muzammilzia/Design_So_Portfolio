import Image from 'next/image';
import React from 'react'
import styles from './Testimonials.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import icon1 from '../../../assetts/home-testimonial-icon1.png'
import icon2 from '../../../assetts/home-testimonial-icon2.png'
import icon3 from '../../../assetts/home-testimonial-icon3.png'
import icon4 from '../../../assetts/home-testimonial-icon4.png'
import icon5 from '../../../assetts/home-testimonial-icon5.png'
import icon6 from '../../../assetts/home-testimonial-icon6.png'

export const Testimonials = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topContainer}>
            <h1>Reinventing new business ideas and markets via web</h1>
            <div className={styles.flexedContainer}>
                <div>
                    <Image src={icon1}/>
                    <div>
                        <h3>Digital Marketing</h3>
                        <p>Improve your digital visibility with strategic and ground-breaking digital marketing services!</p>
                    </div>
                </div>
                <div>
                    <Image src={icon1}/>
                    <div>
                        <h3>Digital Marketing</h3>
                        <p>Improve your digital visibility with strategic and ground-breaking digital marketing services!</p>
                    </div>
                </div>
                <div>
                    <Image src={icon1}/>
                    <div>
                        <h3>Digital Marketing</h3>
                        <p>Improve your digital visibility with strategic and ground-breaking digital marketing services!</p>
                    </div>
                </div>
                <div>
                    <Image src={icon1}/>
                    <div>
                        <h3>Digital Marketing</h3>
                        <p>Improve your digital visibility with strategic and ground-breaking digital marketing services!</p>
                    </div>
                </div>
                <div>
                    <Image src={icon1}/>
                    <div>
                        <h3>Digital Marketing</h3>
                        <p>Improve your digital visibility with strategic and ground-breaking digital marketing services!</p>
                    </div>
                </div>
                <div>
                    <Image src={icon1}/>
                    <div>
                        <h3>Digital Marketing</h3>
                        <p>Improve your digital visibility with strategic and ground-breaking digital marketing services!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <h1>Our client testimonials says it all</h1>
            {/* <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> */}
        </div>
    </div>
  )
}
