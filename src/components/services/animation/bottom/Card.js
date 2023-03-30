import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';

export const Card = ({color, title, body}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "16px"}}>
        <div><BsFillPlusCircleFill color={color} size="40px"/></div>
        <h2>{title}</h2>
        <p style={{fontSize: "1rem"}}>{body}</p>
    </div>
  )
}
