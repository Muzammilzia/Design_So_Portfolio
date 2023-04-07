import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { ImCross } from "react-icons/im"
import { GiHamburgerMenu } from "react-icons/gi"
import { RiArrowDropDownLine } from "react-icons/ri"
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Link from 'next/link';
import useCurrentScrolledHeight from '@/hooks/useCurrentScrolledHeight';
import logo1 from '../../assetts/nav-logo-1.png'
import Image from 'next/image';

export const Navbar = () => {
    const [expandService, setExpandService] = useState(false);
    const { scrolledHeight } = useCurrentScrolledHeight();
    const {height,  width} = useWindowDimensions();
    const [showNav, setShowNav] = useState(false);

  return (
    <nav className={styles.nav} style={scrolledHeight > 300 ? {position: "fixed", top: "0", background: "white", color: "black", boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.15)"} : {}}>
        <Link href="/">
            <span></span>
            <span><Image src={logo1}/></span>
        </Link>
        {width <= 768 ? <div style={{cursor: "pointer"}} onClick={() => setShowNav(prevStat => !prevStat)} className="nav-item" >
                    <GiHamburgerMenu />
                </div> : null}
        <ul className={showNav ? styles.show : styles.hide}>
            {width <= 768 ? <li onClick={() => setShowNav(prevStat => !prevStat)} className="nav-item">
                <div style={{cursor: "pointer"}}>
                    <ImCross />
                </div>
            </li> : null}
            <li className="nav-item">
                <Link href="/" onClick={() => {setShowNav(false)}}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/about" onClick={() => {setShowNav(false)}}>
                    About
                </Link>
            </li>
            <li className={styles.service} onClick={()=>setExpandService(prev => !prev)} style={expandService && width <= 768 ? {height: "228px"} : {}}>
                <div style={{cursor: "pointer"}}>
                    <span>Services</span>
                    <RiArrowDropDownLine size={40}/>
                </div>
                <ul className={styles.serviceDropDown}>
                    <li>
                        <Link href="/services/logo-design" onClick={() => {setShowNav(false)}}>
                            Logo Design
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/web-design" onClick={() => {setShowNav(false)}}>
                            Web Design
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/animation" onClick={() => {setShowNav(false)}}>
                            2D & 3D Animations
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/digital-marketing" onClick={() => {setShowNav(false)}}>
                            Digital Marketing
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/services/brand-development">
                            Brand Development
                        </Link>
                    </li> */}
                </ul>
            </li>
            {/* <li className="nav-item">
                <Link href="/">
                    FAQ
                </Link>
            </li> */}
            <li className="nav-item">
                <Link href="/contact-us" onClick={() => {setShowNav(false)}}>
                    contact us
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/free-qoute" onClick={() => {setShowNav(false)}}>
                    free qoute
                </Link>
            </li>
        </ul>
    </nav>
  )
}
