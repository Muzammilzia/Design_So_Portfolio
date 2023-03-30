import Image from 'next/image';
import React from 'react'
import { Card } from '../card';
import styles from './DigitalMarketing.module.css'
import image from '../../../../assetts/digital-media-marketing-network-img1.png'
import image2 from '../../../../assetts/digital-marketing-traffic-img.png'

import icon1 from '../../../../assetts/digital-marketing-icon1.png'
import icon2 from '../../../../assetts/digital-marketing-icon2.png'
import icon3 from '../../../../assetts/digital-marketing-icon3.png'
import icon4 from '../../../../assetts/digital-marketing-icon4.png'
import icon5 from '../../../../assetts/digital-marketing-icon5.png'
import icon6 from '../../../../assetts/digital-marketing-icon6.png'
import { SecondCard } from '../secondCard';

export const DigitalMarketingMain = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topContainer}>
            <h1>Enabling your brand’s success via social media</h1>
            <p>Social media can be a powerful tool for enabling your brand’s success. Here are some ways that you can use social media to achieve your business goals are Establish your brand’s presence, Engage with your audience, Share valuable content, Use advertising and Monitor and track performance</p>
        </div>
        <div className={styles.secondContainer}>
            <div><Image src={image}/></div>
            <div>
                <Card color="#F47D91" title="Reaching out to an extensive audience" body="Reaching out to an extensive audience refers to the process of communicating with a large group of people in order to promote a product, service, or message."/>
                <Card color="#9FC9EF" title="Interacting live with possible clients" body="are some strategies for engaging with newer business prospects are Identify your target audience, Create a strong value proposition, Use social media, Attend industry events and Follow up."/>
                <Card color="#A8B2E5" title="Reaching out to an extensive audience" body="refers to the process of communicating with potential clients in real-time, either in person or through live online platforms. Live interactions can be a powerful way to build relationships with potential clients and demonstrate your expertise and value."/>
            </div>
        </div>
        <div className={styles.thirdContainer}>
            <h1>Generating Promising Social Links</h1>
            <p>It refers to the process of creating and acquiring links from social media profiles and pages that can be valuable for your business. Here are some strategies for generating promising social links are Share valuable content, Collaborate with influencers, Participate in relevant groups and communities and Use social media advertising</p>
            <div>
                <SecondCard icon={icon1} title="Brand Positioning" body="It refers to the way in which a brand is perceived by consumers in relation to its competitors. It is the unique space that a brand occupies in the minds of its target audience. Effective brand positioning can help a business stand out in its industry and differentiate itself from competitors."/>
                <SecondCard icon={icon2} title="Leads Generation" body="It is the process of identifying and attracting potential customers for a business. Effective lead generation is an important part of the sales process and can help businesses grow and achieve their goals."/>
                <SecondCard icon={icon3} title="Business Linking" body="It is the process of establishing relationships with other businesses in order to achieve mutual benefit. Business linking can take many forms, such as partnerships, collaborations, referrals, and strategic alliances."/>
                <SecondCard icon={icon4} title="Guest Blogging" body="the practice of writing and publishing content on someone else's website or blog. Guest blogging can be an effective way to reach a new audience, build credibility, and drive traffic to your own website."/>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <div>
                <h1>Social media plays a crucial role in reaching out to masses</h1>
                <p>Social media plays a crucial role in reaching out to masses because it allows businesses to easily connect with a large and diverse audience. With over 4.5 billion active users on social media worldwide, it is an essential platform for businesses looking to reach a wide audience.</p>
                <div>
                    <div>
                        <Image src={icon5}/>
                        <h2>Improved Brand Awareness</h2>
                        <p>It increase in the familiarity and recognition of a brand among its target audience. Improved brand awareness can be beneficial for businesses because it can lead to increased sales and customer loyalty.</p>
                    </div>
                    <div>
                        <Image src={icon6}/>
                        <h2>Increased Traffic and SEO Ranking</h2>
                        <p>It is the process of attracting more visitors to a website and improving the website’s ranking in search engine results pages (SERPs).</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={image2}/>
            </div>
        </div>
    </div>
  )
}
