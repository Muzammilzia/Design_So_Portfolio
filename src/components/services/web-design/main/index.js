import React from 'react'
import Image from 'next/image';

import styles from'./WebDesignMain.module.css'

import icon1 from '../../../../assetts/web-development-icon1.png'
import icon2 from '../../../../assetts/web-development-icon2.png'
import icon3 from '../../../../assetts/web-development-icon3.png'
import icon4 from '../../../../assetts/web-development-icon4.png'
import icon5 from '../../../../assetts/web-development-icon5.png'
import icon6 from '../../../../assetts/web-development-icon6.png'
import icon7 from '../../../../assetts/web-development-icon7.png'
import icon8 from '../../../../assetts/web-development-icon8.png'

import image from '../../../../assetts/web-development-process-img.png'
import image2 from '../../../../assetts/web-development-technology.png'

import { Card } from './Card';
import { ThirdContainerCard } from './thirdContainerCard';

export const WebDesignMain = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topContainer}>
            <h1>Professional Web Design & Development Services</h1>
            <p>Get the services of professional website designers and developers to get your next successful business project.</p>
        </div>
        <div className={styles.secondContainer}>
            <h2>Get the Pro Web Designer & Developer of Tech Cuber</h2>
            <p>TechCuber has been providing web designing and development services globally for several years under the supervision of a tech experts team. Have a look, what we have in the hood for you:</p>
            <div className={styles.cardContainer}>
                <Card image={icon1} title="Top-Notch UI/UX Web Designing" body="Our team of skilled web developers create prototypes and usability tests to ensure the projects we work on have a pleasant user experience. Our expert team has knowledge of user interface & user experience (UI/UX) design that enable us to provide creative solutions so that our users have a positive experience."/>
                <Card image={icon2} title="Innovative Web Development" body="We believe in using novel methods to develop cross-platform websites. Our experienced web developers can build advanced websites design, which will ensure the website's smooth run without any chance of crashing."/>
                <Card image={icon3} title="Customized Web Design & Development" body="We think, design, and develop websites on demand for our clients to excel their business. Join us to get a robust, secure, user-friendly, and extensible website as per your demands that excels your branding."/>
                <Card image={icon4} title="Full Stack Development and Upgrade Website CMS" body="The experienced and professional full-stack developer team is the backbone of our company who possess the expertise to manage front-end and back-end development efficiently without any hassle. We also serve the clients who already have a website and want some progression in design and development. Our expert helps you to upgrade your outdated design into a new CMS without doing any harm to your business."/>
            </div>
        </div>
        <div className={styles.thirdContainer}>
            <div>
                <h1>Tech Cuber Process in Your Website Development</h1>
                <div>
                    <ThirdContainerCard image={icon5} title="Free Consultancy about Your Project" body="Feel free to give us a call and schedule a free consultancy to understand what's best for your business."/>
                    <ThirdContainerCard image={icon6} title="Get a Reasonable Quote" body="We believe in building relationships and do not want to dent our client's budget. We understand the requirement and provide the best solution at the most justifiable cost."/>
                    <ThirdContainerCard image={icon7} title="Work & Quality Assurance Goes Side by Side" body="Our highly dedicated QA team makes sure that the work has been done up to the mark."/>
                    <ThirdContainerCard image={icon8} title="Website Launch" body="Once we get your go-ahead, our team launches the website!"/>
                </div>
            </div>
            <div>
                <Image src={image}/>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <div>
                <Image src={image2}/>
            </div>
            <div>
                <h1>Why we're #1 choice of Our Clients.</h1>
                <p>Here are some factors that make our clients stick with us for years and so may you in future!<br/>
                Fast and competent web design & development service Best rates for web design and development talent<br/>
                A highly experienced team of professional experts based in Europe and America. <br/>
                Full time in-house team of front-end and back-end experts, developers, business analysts, etc.<br/>
                Cross-fertilization of ideas with clients<br/>
                Noteworthy track record of delivering successful web design and development <br/>
                Painstaking QA Testing of every website project<br/>
                Ability to manage short deadline in professional manner Shorter development times translate to lower costs</p>
            </div>
        </div>
    </div>
  )
}
