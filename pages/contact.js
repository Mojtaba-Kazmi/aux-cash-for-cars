import React from "react";
import Image from "next/image";

import styles from "@/styles/Contact.module.css";
import Number from "@/components/Number";

import contactPic from "@/public/images/contact.png";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Aux Cash For Cars</title>
        <meta
          name="description"
          content={`Fill out the form  and one of our Car Removal specialists will give you a call. Alternatively you may call us free on ${(
            <a href="tel:0469798540" title="Click here to make a call">
              0469798540
            </a>
          )}`}
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car, contact"
        ></meta>
        <link rel="icon" href="/favicon.ico" />

        <mata name="robots" content="index, follow" />
        <meta property="og:image" content={contactPic} />
        <meta property="og:title" content="Contact Us - Aux Cash For Cars" />
        <meta
          property="og:description"
          content={`Fill out the form  and one of our Car Removal specialists will give you a call. Alternatively you may call us free on ${(
            <a href="tel:0469798540" title="Click here to make a call">
              0469798540
            </a>
          )}`}
        />
      </Head>

      <div className={styles.contactContainer}>
        <section className={styles.section1}>
          <div className={styles.section1Left}>
            <h1>Contact Us</h1>
            <p>Your professional and friendly scrap metal recyclers.</p>
            <div className={styles.numbers}>
              <Number />
            </div>
          </div>
          <div className={styles.section1Right}>
            <Image src={contactPic} alt=" " width="300" height="300" />
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.section2Left}>
            <div>
              <h2>Servicing the greater Sydney Area</h2>
              <p>
                We offer free car removal all over the greater Sydney area. Turn
                your car removal needs into cash for your car all over Sydney.
                We’ll organize car removal for you today – and pay cash!
              </p>
            </div>

            <div className={styles.branch}>
              <h2>Open Hours</h2>
              <p>
                Mon – Fri: 6:30am – 4:30pm
                <br />
                Sat: 6:30am – 11:30am
                <br />
                Sun: Closed
              </p>
            </div>
          </div>

          <div className={styles.section2Right}>
            <form action="https://formspree.io/f/meqwkezw" method="POST">
              <div className={styles.names}>
                <div>
                  <label htmlFor="#companyName" name="Campany Name">
                    Company Name
                  </label>
                  <br />
                  <input type="text" id="companyName" name="Campany Name" />
                </div>
                <div>
                  <label htmlFor="#contactName" name="Contact Name">
                    Contact Name *
                  </label>
                  <br />
                  <input
                    type="text"
                    id="contactName"
                    required
                    name="Contact Name"
                  />
                </div>
              </div>

              <div className={styles.emailAndContect}>
                <div>
                  <label htmlFor="#phoneNum" name="Phone">
                    Phone Number
                  </label>
                  <br />
                  <input type="tel" id="phoneNum" name="Phone" />
                </div>
                <div>
                  <label htmlFor="#email" name="Email">
                    Email *
                  </label>
                  <br />
                  <input type="text" id="email" required name="Email" />
                </div>
              </div>

              <div className={styles.massage}>
                <label htmlFor="#massage" name="Massage">
                  Massage *
                </label>
                <br />
                <input type="text" id="massage" required name="Massage" />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
