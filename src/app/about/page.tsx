"use client";

import React, { useEffect } from "react";
import styles from "../about/page.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh(); // Correct the function call
  }, []);

  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.aboutHeading}>About Me</h1>
      
      <div className={styles.imageContainer} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <Image
          src="/myprofile.jpeg"
          alt="Profile picture of Muhammad Wasif"
          width={300}
          height={250}
          className={styles.pimage}
        />
      </div>
      
      <div className={styles.paraContainer}>
        <p data-aos="flip-up" className={styles.para}>
          My name is Muhammad Wasif, and I&apos;m deeply passionate about web
          development. Over the past months, I have been on an exciting journey,
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
        <h2 className={styles.skillWord}>My Skills</h2>
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
        <p className={styles.p}>
          I believe in continuous learning and improvement. Every project I
          undertake teaches me something new, and I&apos;m excited to share this
          journey with you.
        </p>
      </div>
    </div>
  );
}
