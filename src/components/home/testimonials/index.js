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
import { Card } from './Card';

export const Testimonials = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topContainer}>
            <h1 className='reveal'>Reinventing new business ideas and markets via web</h1>
            <div className={styles.flexedContainer}>
                <Card icon={icon1} title='Digital Marketing' para='Improve your digital visibility with strategic and ground-breaking digital marketing services!'/>
                <Card icon={icon3} title='Logo Design' para='Personalized logo designed for your business!'/>
                <Card icon={icon4} title='Animation & Motion Graphics' para='Make you brand print in the mind of your audience with attractive motion graphics animation'/>
                <Card icon={icon5} title='Web Design & Development' para='User-Friendly website development services to Upscale Your Growth!'/>
            </div>
        </div>
        {/* <div className={styles.bottomContainer}>
            <h1>Our client testimonials says it all</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div> */}
    </div>
  )
}
