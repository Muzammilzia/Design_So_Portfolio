import Link from 'next/link';
import React from 'react'
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerFooterContainer}>
        <div  className={styles.innerFooter}>
          <div >
            <h1>About us</h1>
            <p>We believe in the motto of “Think Plan and Execute”, which reflects upon our vision to disrupt the dynamics of the international digital industry.</p>
            <span>LOGO</span>
          </div>
          <div>
            <h1>Important Links</h1>
            <ul>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1>Contact Us</h1>
            <ul>
              <li>
                444 benjamin franklin ct aurora il 60504
              </li>
              <li>
                Phone: +1 (331) 278-1199
              </li>
              <li>
                Email: info@techcuber.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyrights}>
        <span>© Copyright 2023 Tech Cuber</span>
        <span>F G in</span>
      </div>
    </div>
  )
}
