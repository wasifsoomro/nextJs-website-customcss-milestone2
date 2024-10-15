import React from 'react'
import styles from "./Footerer.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.socialIcons}>
        <hr className={styles.customLine} /> 
        <Link href="https://www.facebook.com/wasifkhan65?mibextid=ZbWKwL">
        <Image src="/icons8-facebook-48.png" alt='facebok' width={50} height={30}/>
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-wasif-337b5a213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Image src="/icons8-linkedin-48.png" alt="linkedin" width={50} height={30} />
        </Link>
        <Link href="https://x.com/M_WasifSoomro?t=SRHbomKzbfm0E-BcOnFaFQ&s=09">
          <Image src="/icons8-twitter-48.png" alt="twitter" width={50} height={30} />
          </Link>
        <hr className={styles.customLine}/> 
    </div>
    <p className={styles.para}>Copy Right © 2024 WS All rights reserved. Let's create something great!</p>
    </div>
  )
}
