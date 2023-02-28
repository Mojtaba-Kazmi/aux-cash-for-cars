import React from "react";
import styles from "@/styles/Footer.module.css";

import Image from "next/image";
import Link from "next/link";
import Sharing from "@/styles/Sharing.module.css";

import logo from "@/public/images/cash-car-logo.svg";
import { IoLocationSharp } from "react-icons/io5";

import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "next-share";

import postImage from "@/public/images/broken-down-cars.jpg";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.section1}>
        <p>Last updated on Janvary 30th, 2023 at 09:56 pm</p>
      </section>

      <section className={styles.section2}>
        <div className={styles.logoAndText}>
          <p>
            <Link className={Sharing} href={"/"}>
              AUX Cash for Car
            </Link>{" "}
            buys all kinds of cars for cash and pay best price as compare to
            other wreckers and dealers. We also buy scrap metal all around
            Sydney.
          </p>
        </div>

        <div className="Sharing.cashForCars}">
          <h2>Share us on:</h2>
          <div className={Sharing.socialIconBox}>
            <FacebookShareButton
              url={"/"}
              quote={
                "You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!"
              }
              hashtag={"#cashForCar"}
              image={postImage}
            >
              <FaFacebookSquare />
            </FacebookShareButton>

            <PinterestShareButton
              url={"/blog/post1"}
              quote={
                "You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!"
              }
              hashtag={"#cashForCar"}
              image={postImage}
            >
              <FaPinterestSquare />
            </PinterestShareButton>

            <TwitterShareButton
              url={"/blog/post1"}
              quote={
                "You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!"
              }
              hashtag={"#cashForCar"}
              image={postImage}
            >
              <FaTwitterSquare />
            </TwitterShareButton>

            <WhatsappShareButton
              url={"/blog/post1"}
              quote={
                "You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!"
              }
              hashtag={"#cashForCar"}
              image={postImage}
            >
              <FaWhatsappSquare />
            </WhatsappShareButton>
          </div>
        </div>

        <div className={styles.ourBusiness}>
          <h2>Our Business</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href={"/services"}>Services</Link>
            </li>

            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>

            <li>
              <Link href={"/faq"}>FAQs</Link>
            </li>

            <li>
              <Link href={"/about"}>About us</Link>
            </li>

            <li>
              <Link href={"/contact"}>Contact us</Link>
            </li>
          </ul>
        </div>

        <div className={styles.OtherServices}>
          <h2>Other Services</h2>
          <ul>
            <li>
              <Link href="/services">Cash For Cars Sydney</Link>
            </li>

            <li>
              <Link href={"/services"}>Cash for Scrap Metal Sydney</Link>
            </li>

            <li>
              <Link href={"/services"}>Cash For Bins Sydney</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section3}>
        <div className={styles.socialMadia}>
          <h2>Follow Us On:</h2>
          <div>
            <Link href={"/"}>
              <FaFacebookSquare />
            </Link>
            <Link href={"/"}>
              <FaInstagramSquare />
            </Link>
            <Link href={"/"}>
              <FaPinterestSquare />
            </Link>
            <Link href={"/"}>
              <FaYoutubeSquare />
            </Link>
          </div>
        </div>

        <div className={styles.address}>
          <h2>AUX Cash for Car Locations</h2>
          <p>
            <IoLocationSharp />
            Sydney Australia
          </p>
        </div>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image
              src={logo}
              title="AUX cash for car logo"
              alt="Cash for car - Home"
              width="100"
              height="100"
            />
          </Link>
        </div>
      </section>

      <section className={styles.section4}>
        <p>
          Copyright 2023 ©{" "}
          <Link className={Sharing.link} href={"/"}>
            AUX Cash for Car
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Footer;
