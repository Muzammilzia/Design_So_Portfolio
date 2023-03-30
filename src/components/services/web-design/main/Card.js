import Image from 'next/image';
import React from 'react'
import styles from './Card.module.css'

export const Card = ({image, title, body}) => {
  return (
    <div className={styles.container}>
        <Image src={image}/>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  )
}
