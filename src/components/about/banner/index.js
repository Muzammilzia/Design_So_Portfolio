import Image from 'next/image';
import React from 'react'
import styles from './AboutBanner.module.css'

import banner from '../../../assetts/about-banner.png'

export const AboutBanner = () => {
  return (
    <div className={styles.container}>
        <div>
            <h1>About Company</h1>
            <p>Tech Cuber is an IT solution provider and digital marketing agency, providing services for years in the United Kingdom, United States, and Europe markets. Our strong international presence and top of line portfolio give assurance to our customers of receiving top-notch digital services such as logo design, website design & development, brand development, 2D & 3D illustration, motion graphic, and creative copywriting services.</p>
            <p>We believe in the motto of “Think Plan and Execute”, which reflects upon our vision to disrupt the dynamics of the international digital industry by providing state-of-the-art digital services.</p>
        </div>
        <div>
            <Image src={banner}/>
        </div>
    </div>
  )
}
