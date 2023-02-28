import React from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

import mypic from "@/public/images/cash-car-logo.svg";
import Navbar from "./Navbar";
import Number from "./Number";

import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  // ----------------------------------------------------
  let navbarElement;
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  if (click) {
    navbarElement = <Navbar />;
  } else {
  }

  console.log(navbarElement);

  return (
    <div className={styles.header}>
      <section className={styles.headerSection1}>
        <Link href="/" className="header_right" onClick={closeMobileMenu}>
          <Image
            src={mypic}
            title="AUX cash for car logo"
            alt="cash for car, car removal - Home"
            width="100"
            height="100"
          />
        </Link>

        <div className={styles.header_right}>
          <div className={styles.adress}>
            <div>
              <IoLocationSharp />
            </div>
            <p>Sydney,Australia</p>
          </div>

          <Number />
        </div>

        {/* ----------------------- */}
        <div className={styles.mobile_buttons} onClick={handleclick}>
          {click ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </section>
      <section
        className={click ? styles.headerSection2 : styles.headerSection3}
        onClick={closeMobileMenu}
      >
        <Navbar />
      </section>
    </div>
  );
}

export default Header;
