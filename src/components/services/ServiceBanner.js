import React from 'react'
import styles from './ServiceBanner.module.css'

export const ServiceBanner = ({image, title}) => {
  return (
    <div className={styles.container} style={{backgroundImage: `url(${image.src})`}}>
        <h1>{title}</h1>
    </div>
  )
}
