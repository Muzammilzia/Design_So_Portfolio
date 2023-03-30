import React from 'react'
import styles from "./HomeBanner.module.css"
import imageRocket from "../../../assetts/home-banner-rocket.png"
import Image from 'next/image';

export const HomeBanner = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
          <div >
            <h1>One Stop Solutions to All Your Digital Requirement</h1>
            <p>Tech Cuber is your global digital partner that provides a 360° solution that combines web development & design, branding strategy, and digital marketing expertise. We bolster the business to grow and achieve the loftier goal by laying the foundation today with our services.</p>
          </div>
          <div className={styles.rocketBackground}>
            <Image src={imageRocket}/>
          </div>
      </div>
    </div>
  )
}
