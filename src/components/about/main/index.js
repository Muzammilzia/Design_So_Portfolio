import React from 'react'
import styles from './AboutMain.module.css'
import { FiArrowRightCircle } from 'react-icons/fi'
import { AiFillCheckCircle } from 'react-icons/ai'
import banner1 from '../../../assetts/about-main-dynamic-team.jpg'
import Image from 'next/image';
import { Card } from './Card';
import bussinesGrowthImage from '../../../assetts/about-bussines-growth.jpg'
import emailMarketing from '../../../assetts/about-email-marketing.jpg'

export const AboutMain = () => {
  return (
    <div>
        <div className={styles.topContainer}>
            <div>
                <Image src={banner1}/>
            </div>
            <div>
                <h1>A bunch of enthusiastic & creative minds</h1>
                <p>Finalizing new corporate ideas, game-plans and strategies for a firm.</p>
                <ul>
                    <li style={{display: 'flex', alignItems: "center", fontSize: "1.1rem", paddingBottom: "8px"}}>
                        <FiArrowRightCircle/>
                        <span style={{paddingLeft: "8px"}}>An array of business formulation strategies</span> 
                    </li>
                    <li style={{display: 'flex', alignItems: "center", fontSize: "1.1rem", paddingBottom: "8px"}}>
                        <FiArrowRightCircle/>
                        <span style={{paddingLeft: "8px"}}>Revenue generation and user engagement plans</span> 
                    </li>
                    <li style={{display: 'flex', alignItems: "center", fontSize: "1.1rem", paddingBottom: "8px"}}>
                        <FiArrowRightCircle/>
                        <span style={{paddingLeft: "8px"}}>Charting company growth via new metrics</span> 
                    </li>
                    <li style={{display: 'flex', alignItems: "center", fontSize: "1.1rem", paddingBottom: "8px"}}>
                        <FiArrowRightCircle/>
                        <span style={{paddingLeft: "8px"}}>Establishing a strong foothold in the industry</span> 
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <div>
                <div className={styles.leftContainer}>
                    <h1>Expertise in Diverse Business Verticals</h1>
                    <div>
                        <h3><AiFillCheckCircle color='#FD6886' size={50}/><span>Flawless incorporation</span></h3>
                        <p>Choose a unique value proposition, map territories and competition, increase what works, embrace new promotional opportunities, create consistency, improve relationships</p>
                    </div>
                    <div>
                        <h3><AiFillCheckCircle color='#FD6886' size={50}/><span>Seamless management</span></h3>
                        <p>Planning and monitoring your operations to meet growth, implementing processes for efficiency, and constantly working to improve</p>
                    </div>
                </div>
                <Card image={bussinesGrowthImage} heading="Business growth" para="Take your business to a new level and add Meta to your marketing plan. See our features. Advertise your business directly to an engaged audience. Learn more about Facebook ads. Grow Online Sales Today. Build Brand Awareness. Generate Leads."/>
                <Card image={emailMarketing} heading="Email marketing" para="the process of promoting your business by sending targeted emails to your prospects and customers. It is a hybrid of direct and digital marketing that aims to convert leads into buyers and buyers into loyal customers."/>
            </div>
            <div>
                <h1>Our Vision</h1>
                <p>A team of digital aficionados & futurists with a goal to unearth unprecedented horizons of success!
                Tech Cuber emerged as the premium digital marketing agency with the dream of empowering businesses to excel in the digital world. Our team is led by a group of visionaries who have the hunger of identifying solutions to bolster businesses in achieving their objectives. From website design & development services to motion graphics – we have experts in every field to strengthen the businesses and assist them in reaching their goals faster than they could imagine.
                We offer customized digital services in various sectors. No matter what you require, we always go the extra mile and stand with you side-by-side in your growth journey to make sure you achieve your goals quickly. This working philosophy helps us have a dynamic clientele in the USA, UK and Europe.
                At Tech Cuber, we design solutions that make your business worthy and ensure a 10x return on investment.</p>
            </div>
        </div>
    </div>
  )
}
