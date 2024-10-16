import React from "react";
import styles from "../contact/page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className={styles.contactPage}>
      <h1 className={styles.heading}>Contact Us</h1>

      <p className={styles.contactPara}>
        If you have any questions or inquiries, feel free to contact us.
      </p>

      <div className={styles.contactContainer}>
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
              <label htmlFor="phone_number" className={styles.label}>
                Phone Number
              </label>
              <input
                className={styles.formInputs}
                type="tel"
                id="phone_number"
                name="phone_number"
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

      <div className={styles.contactInfo}>
        <div className={styles.contactList}>
          <div className={styles.contactSource}>
            <Image
              src="/icons8-email-48.png"
              alt="Email icon"
              width={80}
              height={50}
              className={styles.contactImage}
            />
            <p className={styles.contactText}>yourname@example.com</p>
          </div>

          <div className={styles.contactSource}>
            <Image
              src="/icons8-phone-100.png"
              alt="Phone icon"
              width={50}
              height={30}
              className={styles.contactImage}
            />
            <p>+123-456-7890</p>
          </div>

          <div className={styles.contactSource}>
            <Image
              src="/icons8-map-marker-32.png"
              alt="Location icon"
              width={80}
              height={50}
            />
            <p>123 Web Developer St, Coding City</p>
          </div>
        </div>
      </div>

      <div className={styles.contactextra}>
        <h2 className={styles.h2extra}>Follow Us</h2>
        <div className={styles.sociallinks}>
          <div>
            <Link href="https://www.linkedin.com/in/muhammad-wasif-337b5a213">
              <Image
                src="/icons8-linkedin-48.png"
                alt="LinkedIn icon"
                width={80}
                height={50}
              />
              <p className={styles.paraextra}>LinkedIn</p>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/wasifsoomro">
              <Image
                src="/icons8-github-48.png"
                alt="GitHub icon"
                width={80}
                height={50}
              />
              <p className={styles.paraextra}>GitHub</p>
            </Link>
          </div>
          <div>
            <Link href="https://x.com/M_WasifSoomro">
              <Image
                src="/icons8-twitter-48.png"
                alt="Twitter icon"
                width={80}
                height={50}
              />
              <p className={styles.paraextra}>Twitter</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
