import Image from 'next/image';
import React from 'react'

export const Card = ({icon, title, para}) => {
  return (
    <div className='reveal' style={{padding: "14px"}}>
        <div>
            <Image src={icon}/>
            <h3>{title}</h3>
            <p>{para}</p>
        </div>
    </div>
  )
}
