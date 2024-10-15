"use client"

import React from "react";
import styles from "../about/page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh;
  }, []);
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutHeading}>About Me</div>
      <div className={styles.imageContainer}>
        <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className={styles.imageContainer}>
          <Image
            src="/myprofile.jpeg"
            alt="jxj"
            width={300}
            height={250}
            className={styles.pimage}
          />
        </div>
        <div className={styles.paraContainer}>
          <p data-aos="flip-up" className={styles.para}>
            My name is Muhammad Wasif, and I'm deeply passionate about web
            development. Over the past months, I’ve been on an exciting journey,
            learning and mastering the essential skills needed to become a
            proficient full-stack developer. <br /> <br />With a strong foundation in HTML,
            CSS, and JavaScript, I am continuously exploring more advanced
            frameworks like React and Next.js. My goal is to develop innovative,
            responsive, and user-friendly web applications that create impactful
            user experiences. <br /><br /> This website is a reflection of my growing
            knowledge and my commitment to the craft of web development. As I
            expand my expertise, I am eager to dive into more complex areas of
            full-stack development, including server-side programming,
            databases, and application deployment.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <div className={styles.skillHead}>
              <h1 className={styles.skillWord}> My Skills</h1>
          </div>
        <div data-aos="flip-left" className={styles.skillsGrid}>
          <div className={styles.skillCard}>
        <Image src="/html-logo.png" alt="HTML Logo" width={100} height={80} />
        <Image src="/csslogo.jpeg" alt="CSS Logo" width={100} height={80} />
        <p className={styles.skillDescription}>HTML5 & CSS3</p>
      </div>
      <div className={styles.skillCard}>
        <Image src="/jslogo.jpeg" alt="JavaScript Logo" width={100} height={80} />
        <Image src="/reactlogo.jpeg" alt="React Logo" width={100} height={80} />
        <Image src="/nextlogo.jpeg" alt="Next.js Logo" width={100} height={80} />
        <p className={styles.skillDescription}>JavaScript, React, Next.js</p>
      </div>
        </div>
        <h3 className={styles.h3}>I believe in continuous learning and improvement. Every project I undertake teaches me something new, <br />and I’m excited to share this journey with you</h3>
        </div>
      </div>
    </div>
  );
}
