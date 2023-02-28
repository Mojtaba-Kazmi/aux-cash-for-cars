import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "@/styles/Navbar.module.css";

function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbar}>
        <li
          className={router.pathname == "/" ? styles.active : styles.nav_itme}
        >
          <Link
            href="/"
            className={router.pathname == "/" ? styles.activeA : styles.navLink}
          >
            HOME
          </Link>
        </li>

        <li
          className={
            router.pathname == "/services" ? styles.active : styles.nav_itme
          }
        >
          <Link
            href={"/services"}
            className={
              router.pathname == "/services" ? styles.activeA : styles.navLink
            }
          >
            SERVICES
          </Link>
        </li>

        <li
          className={
            router.pathname == "/blog" ? styles.active : styles.nav_itme
          }
        >
          <Link
            href={"/blog"}
            className={
              router.pathname == "/blog" ? styles.activeA : styles.navLink
            }
          >
            BLOG
          </Link>
        </li>

        <li
          className={
            router.pathname == "/faq" ? styles.active : styles.nav_itme
          }
        >
          <Link
            href={"/faq"}
            className={
              router.pathname == "faq" ? styles.activeA : styles.navLink
            }
          >
            FAQS
          </Link>
        </li>

        <li
          className={
            router.pathname == "/about" ? styles.active : styles.nav_itme
          }
        >
          <Link
            href={"/about"}
            className={
              router.pathname == "/about" ? styles.activeA : styles.navLink
            }
          >
            ABOUT US
          </Link>
        </li>

        <li
          className={
            router.pathname == "/contact" ? styles.active : styles.nav_itme
          }
        >
          <Link
            href={"/contact"}
            className={
              router.pathname == "/contact" ? styles.activeA : styles.navLink
            }
          >
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
