"use client"

import React, { useState } from 'react'
import Styles from "../(components)/Header.module.css"
import Link from 'next/link';

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
   setMenuOpen((prevState) => !prevState)
  }

  

  return (
    <header className={Styles.headerContainer}>
      <div className={Styles.logoContainer} id="logo">
        <h1 className={Styles.logo}>WS</h1>
      </div>

      <div className={Styles.hamburger} onClick={toggleMenu}>
        <span className={Styles.bar}></span>
        <span className={Styles.bar}></span>
        <span className={Styles.bar}></span>
      </div>

      <nav className={`${Styles.navContainer} ${menuOpen ? Styles.navActive : ''}`}>
      <div className={Styles.cross} onClick={toggleMenu}>&#10005;</div>
        <Link href="/" className={Styles.navLink} onClick={toggleMenu}>Home</Link>
        <Link href="/about" className={Styles.navLink} onClick={toggleMenu}>About Me</Link>
        <Link href="/contact" className={Styles.navLink} onClick={toggleMenu}>Contact Me</Link>
      </nav>
      
    </header>
  );
}
