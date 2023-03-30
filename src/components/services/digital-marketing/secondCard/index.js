import Image from 'next/image';
import React from 'react'
import styles from './SecondCard.module.css'

export const SecondCard = ({icon, title, body}) => {
  return (
    <div className={styles.container}>
        <div><Image src={icon}/></div>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
  )
}
