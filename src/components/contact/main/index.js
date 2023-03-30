import Image from 'next/image';
import React from 'react'
import styles from './ContactMain.module.css'
import listIcon1 from '../../../assetts/contact-list-icon1.png'
import listIcon2 from '../../../assetts/contact-list-icon2.png'
import listIcon3 from '../../../assetts/contact-list-icon3.png'

export const ContactMain = () => {
  return (
    <div className={styles.container}>
        <div className={styles.addressContainer}>
            <h1>Get In Touch</h1>
            <ul>
                <li>
                    <a>
                        <Image src={listIcon1}/>
                        <span>
                            444 benjamin franklin ct aurora il 60504
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <Image src={listIcon2}/>
                        <span>
                            Call us on: <br/>
                            +1 (331) 278-1199
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <Image src={listIcon3}/>
                        <span>
                            Email us on: <br/>
                            Info@techcuber.com
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <div className={styles.formContainer}>
            <h2>Drop us a line</h2>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <textarea type="text" placeholder='Your Comment'/>
            <button>Send!</button>
        </div>
    </div>
  )
}
