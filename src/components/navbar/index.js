import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { ImCross } from "react-icons/im"
import { GiHamburgerMenu } from "react-icons/gi"
import { RiArrowDropDownLine } from "react-icons/ri"
import useWindowDimensions from '@/hooks/useWindowDimensions';
import Link from 'next/link';
import useCurrentScrolledHeight from '@/hooks/useCurrentScrolledHeight';

export const Navbar = () => {
    const { scrolledHeight } = useCurrentScrolledHeight();
    const {height,  width} = useWindowDimensions();
    const [showNav, setShowNav] = useState(false);

  return (
    <nav className={styles.nav} style={scrolledHeight > 300 ? {position: "fixed", top: "0", background: "white", color: "black", boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.15)"} : {}}>
        <Link href="/">
            <span></span>
            <span>LOGO</span>
        </Link>
        {width <= 768 ? <Link onClick={() => setShowNav(prevStat => !prevStat)} className="nav-item" href="#">
                    <GiHamburgerMenu />
                </Link> : null}
        <ul className={showNav ? styles.show : styles.hide}>
            {width <= 768 ? <li onClick={() => setShowNav(prevStat => !prevStat)} className="nav-item">
                <Link href="#">
                    <ImCross />
                </Link>
            </li> : null}
            <li className="nav-item">
                <Link href="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/about">
                    About
                </Link>
            </li>
            <li className={styles.service}>
                <Link href="#">
                    <span>services</span>
                    <RiArrowDropDownLine size={40}/>
                </Link>
                <ul className={styles.serviceDropDown}>
                    <li>
                        <Link href="/services/logo-design">
                            Logo Design
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/web-design">
                            Web Design
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/animation">
                            2D & 3D Animations
                        </Link>
                    </li>
                    <li>
                        <Link href="/services/digital-marketing">
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
                <Link href="/contact-us">
                    contact us
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/free-qoute">
                    free qoute
                </Link>
            </li>
        </ul>
    </nav>
  )
}
