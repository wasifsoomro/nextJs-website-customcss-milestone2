"use client";

import styles from "../home/page.module.css";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh(); // Updated to invoke the refresh method
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.divContainer}>
        <div data-aos="zoom-in-up" className={styles.imageContainer}>
          <Image
            src="/myprofile.jpeg"
            alt="Profile Picture"
            width={400}
            height={350}
            className={styles.pimage}
            priority 
          />
        </div>

        <div className={styles.headingContainer}>
          <h1 data-aos="flip-left" className={styles.heading}>
            Welcome To My
          </h1>
          <h1 data-aos="flip-left" className={styles.heading2}>
            Website
          </h1>
          <h1 data-aos="flip-up" className={styles.name}>
            Muhammad Wasif
          </h1>

          <div data-aos="flip-right" className={styles.para}>
            <p className={styles.l1}>
              A web development enthusiast learning to
            </p>
            <p className={styles.l2}>create clean and functional websites. This</p>
            <p className={styles.l3}>is my first website, and I am excited to</p>
            <p className={styles.l4}>share it with you.</p>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        <div data-aos="fade-right" className={styles.card1}>
          <h1 className={styles.aboutHeading}>About Me</h1>
          <div className={styles.aboutImageContainer}>
            <Image
              src="/myPhoto.jpeg"
              alt="About Me Image"
              width={340}
              height={300}
              className={styles.aboutImage}
            />
          </div>
          <p className={styles.aboutpara}>
            I am Muhammad Wasif, and I&apos;m currently learning web development. My
            goal is to become a full-stack developer, and this website marks the
            beginning of my journey.
          </p>
        </div>

        <div data-aos="fade-left" className={styles.card2}>
          <h1 className={styles.aboutHeading2}>Skills</h1>
          <div className={styles.htmlcssImage}>
            <Image src="/html-logo.png" alt="HTML Logo" width={100} height={80} />
            <Image src="/csslogo.jpeg" alt="CSS Logo" width={100} height={80} />
          </div>
          <div className={styles.nextContainer}>
            <Image
              src="/nextlogo.jpeg"
              alt="Next.js Logo"
              width={100}
              height={80}
              className={styles.nextImage}
            />
          </div>
          <div className={styles.jsreactImage}>
            <Image src="/jslogo.jpeg" alt="JavaScript Logo" width={100} height={80} />
            <Image src="/reactlogo.jpeg" alt="React Logo" width={100} height={80} />
          </div>
          <p className={styles.aboutpara2}>
            I am proficient in HTML, CSS, and JavaScript, and I am exploring
            frameworks like React and Next.js.
          </p>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={styles.conheaddiv}
        >
          <h1 className={styles.contHeading}>Contact Me</h1>
        </div>

        <div data-aos="zoom-in-up" className={styles.formContainer}>
          <form className={styles.contactForm}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                className={styles.formInputs}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                className={styles.formInputs}
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <input
                className={styles.formInputs}
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                className={styles.textArea}
                name="message"
                id="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
