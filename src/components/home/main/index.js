import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "./HomeMain.module.css"
import icon1 from '../../../assetts/home-main-icon1.png'
import icon2 from '../../../assetts/home-main-icon2.png'
import icon3 from '../../../assetts/home-main-icon3.png'
import icon4 from '../../../assetts/home-main-icon4.png'
import stayConnected from '../../../assetts/home-main-one-stay-connected.jpg'
import phoneImage from '../../../assetts/home-main-one-phone.jpg'

export const HomeMain = () => {
  return (
    <div className={styles.parentContainer}>
        <div className={styles.topContainer}>
            <div className={styles.topContainerLeft}>
                <h1>Think. Plan. Execute.</h1>
                <p style={{paddingBottom: "0"}}>Partner with Tech Cuber as your digital agency and take your business to the zenith with the assistance of our data-driven digital marketing services and IT solutions.</p>
                <p>Are you all set to take your business to new heights? Contact us and get a marketing proposal and consultation for free!</p>
                <Link href="/about">Konw More About Us</Link>
            </div>
            <div className={styles.topContainerRight}>
                <div style={{paddingTop: "25px"}}>
                    <div style={{ height: "122px", overflow: "hidden"}}>
                        <Image src={icon1}/>
                    </div>
                    <h3>Custom design.</h3>
                    <p>Leading your brand to the top begins with custom design services. Our team can provide you custom development to ensure your success.</p>
                </div>
                <div>
                    <div style={{ height: "122px", overflow: "hidden"}}>
                        <Image src={icon2}/>
                    </div>
                    <h3>Custom design.</h3>
                    <p>Leading your brand to the top begins with custom design services. Our team can provide you custom development to ensure your success.</p>
                </div>
                <div style={{paddingTop: "25px"}}>
                    <div style={{ height: "122px", overflow: "hidden"}}>
                        <Image src={icon3}/>
                    </div>
                    <h3>Custom design.</h3>
                    <p>Leading your brand to the top begins with custom design services. Our team can provide you custom development to ensure your success.</p>
                </div>
                <div>
                    <div style={{ height: "122px", overflow: "hidden"}}>
                        <Image src={icon4}/>
                    </div>
                    <h3>Custom design.</h3>
                    <p>Leading your brand to the top begins with custom design services. Our team can provide you custom development to ensure your success.</p>
                </div>
            </div>
        </div>
        <div className={styles.middleContainer}>
            <div>
                <Image src={stayConnected}/>
            </div>
            <div>
                <h1>Get Your Free Business Consultation Today & Grow with Us</h1>
                <p>We do not believe in serve-and-go business practices. Our experts in branding, marketing, web development, and design put their heads together to find the out-of-the-box idea for your business to thrive in the digital world. With years of experience in making successful digital marketing campaigns, lead generation activities, and branding development, Tech Cuber is here to assist you in getting a whole new game plan that can help you achieve revenue beyond imagination.</p>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <div>
                <Image src={phoneImage}/>
            </div>
            <div>
                <h1>Grow Your Sales, Revenues, & Online Conversion with Our Services</h1>
                <p>Uniting our cutting-edge technology service and marketing expert team delivers a sure shot formula that helps your business to smoothly outrank your competition. The digital marketing professionals in the field of Social Media Marketing, Search Engine Marketing, Marketplace Experts, Website Design & Development Experts, and Skilled Graphic Designers, make us the leading digital marketing & IT solution providers in Europe, the United States, and the United Kingdom.</p>
                <p>Let’s join hands together and use our digital marketing services to understand how can we make your business achieve its objectives effortlessly.</p>
            </div>
        </div>
    </div>
  )
}
