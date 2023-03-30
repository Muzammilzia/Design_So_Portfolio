import Image from 'next/image';
import React from 'react'
import styles from './LogoDesignMain.module.css'
import ipadLogo from '../../../../assetts/logo-design-ipad-demo.jpg'
import middleBottomLogo from '../../../../assetts/log-design-middleBottom.png'

export const LogoDesignMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerTop}>
        <div>
          <Image src={ipadLogo}/>
        </div>
        <div>
          <h1>Get Affordable Logo Design Services to Make Your Brand Notorious</h1>
          <p>A logo is a first and foremost thing that defines your brand. Whether it is a business card, digital platform, brochure or letterhead, the company logo gives the initial brand message to your potential clients. The logo is one of the things that businesses want to get on fleek without changing it for a long period of time unless rebranding occurs in the meantime.</p>
          <p>With so many online logo-making options available that entice companies and convince them to not put time and effort into this crucial branding stage, which could lead to the ultimate demise of the company. The cheap or free logo service is the biggest misstep in branding strategy.</p>
          <p>Therefore, you need experienced marketing professionals to get the right logo the first time that clearly defines your brand’s message and drives potential leads to your business.</p>
          <p>That’s where Tech Cuber comes into play.</p>
        </div>
      </div>
      <div className={styles.middleTop}>
        <h1>Logo designs that bring a smile on faces</h1>
        <p>We endeavour to transcend our customer’s expectations by taking complete ownership of their work and performing our duty round the clock to crack the success formula for our clients. The business experts in our team have years of experience in the branding and marketing field. They have the vision to analyze the competition at a much earlier stage and prepare a branding strategy to align with the logo design that simply allows our clients to outrank the competition without putting in any effort.</p>
        <p>Tech Cuber takes your wish as the command. The reigns will always be in your hands and we all ears to listen to your idea and put them into our brainstorming process. Our belief in the cross-fertilization of ideas is the secret of our diverse clientele scattered across Europe, the UK, Canada, and the USA.</p>
      </div>
      <div className={styles.middleBottom}>
      <div>
          <Image src={middleBottomLogo}/>
        </div>
        <div>
          <h1>Logo Design that Sets You Apart from Competition</h1>
          <p>We are not exaggerating but we have what it takes to make the brands excel and put them at the zenith of their respective industry. The experience business professional, a dedicated creative team, and branding experts make us a formidable workforce who put heads together on each project and always come out with out-of-the-box ideas that take your brand far above its competitors.</p>
          <p>Be it an established brand or a start-up, every business wants to have a unique and creative logo design but not all got one. To make sure your corporate logo design turns out to be eccentric, graceful, and unforgettable, partner with Tech Cuber!</p>
        </div>
      </div>
      <div className={styles.middleTop} style={{paddingTop: "56px", paddingBottom: "56px"}}>
        <h1>Logo designs that bring a smile on faces</h1>
        <p>We endeavour to transcend our customer’s expectations by taking complete ownership of their work and performing our duty round the clock to crack the success formula for our clients. The business experts in our team have years of experience in the branding and marketing field. They have the vision to analyze the competition at a much earlier stage and prepare a branding strategy to align with the logo design that simply allows our clients to outrank the competition without putting in any effort.</p>
        <p>Tech Cuber takes your wish as the command. The reigns will always be in your hands and we all ears to listen to your idea and put them into our brainstorming process. Our belief in the cross-fertilization of ideas is the secret of our diverse clientele scattered across Europe, the UK, Canada, and the USA.</p>
      </div>
    </div>
  )
}
