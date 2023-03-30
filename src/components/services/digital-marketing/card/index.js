import React from 'react'
import styles from './Card.module.css'
import { BsFillPlusCircleFill } from 'react-icons/bs'

export const Card = ({color, title, body}) => {
  return (
    <div className={styles.container}>
        <div><BsFillPlusCircleFill color={color} size="40px"/></div>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
  )
}
