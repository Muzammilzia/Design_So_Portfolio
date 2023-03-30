import Image from 'next/image';
import React from 'react'
import styles from './ContactBanner.module.css'
import image from '../../../assetts/contact-banner-image.png'

export const ContactBanner = () => {
  return (
    <div className={styles.container}>
        <h1>Contact</h1>
        <div><Image src={image}/></div>
    </div>
  )
}
