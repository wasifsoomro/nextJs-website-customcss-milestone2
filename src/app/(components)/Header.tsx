import React from 'react'
import Styles from "../(components)/Header.module.css"
import Link from 'next/link';

export default function Header() {
  return (
    <header className={Styles.headerContainer}>
      <div className={Styles.logoContainer} id="logo">
        <h1 className={Styles.logo}>WS</h1>
      </div>

      <nav className={Styles.navContainer}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
