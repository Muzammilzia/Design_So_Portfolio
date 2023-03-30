import Image from 'next/image';
import React from 'react'
import styles from './AnimationMain.module.css'
import image1 from '../../../../assetts/animation-image1.jpg'

export const AnimationMain = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={image1}/>
      </div>
      <div>
        <h1>2D & 3D animation Services</h1>
        <p>We know how tough it is to find a good 2D & 3D animator and illustrator. Most of the clients who take the challenge of hiring 2D and 3D animator, they come across the following challenges:</p>
        <p className={styles.bold}>- Burn time and money in finding talented and capable animators</p>
        <p className={styles.bold}>- Steep prices of 2D & 3D illustration services</p>
        <p className={styles.bold}>- Unable to find a fluent English native speakers for voice over</p>
        <p>We know how tough it is to find a good 2D & 3D animator and illustrator. Most of the clients who take the challenge of hiring 2D and 3D animator, they come across the following challenges:</p>
      </div>
    </div>
  )
}
