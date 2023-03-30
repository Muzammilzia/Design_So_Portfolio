import Image from 'next/image';
import React from 'react'
import styles from './thirdContainerCard.module.css'

export const ThirdContainerCard = ({image, title, body}) => {
  return (
    <div className={styles.container}>
        <Image src={image}/>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
  )
}
