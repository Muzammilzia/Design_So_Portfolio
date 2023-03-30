import Image from 'next/image';
import React from 'react'
import styles from './AboutMain.module.css'

export const Card = ({image, heading, para}) => {
  return (
    <div style={{padding: "18px"}}>
      <div className={styles.card}>
        <Image src={image}/>
        <h2>{heading}</h2>
        <p>{para}</p>
      </div>
    </div>
  )
}