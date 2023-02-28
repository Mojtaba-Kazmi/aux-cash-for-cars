import React, { useState, useEffect } from "react";

import styles from "@/styles/Slide.module.css";
import Link from "next/link";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Slide() {
  const [nextSlide, setNextSlide] = useState("0%");
  const [nextText, setNextText] = useState(true);

  function sliderRight() {
    if (nextSlide == "0%") {
      setNextSlide("-100%");
      setNextText(!nextText);
    } else if (nextSlide == "-100%") {
      setNextSlide("-200%");
      setNextText(!nextText);
    } else if (nextSlide == "-200%") {
      setNextSlide("-300%");
      setNextText(!nextText);
    } else if (nextSlide == "-300%") {
      setNextSlide("0%");
      setNextText(!nextText);
    }
  }

  function sliderLeft() {
    if (nextSlide == "0%") {
      setNextSlide("-300%");
      setNextText(!nextText);
    } else if (nextSlide == "-300%") {
      setNextSlide("-200%");
      setNextText(!nextText);
    } else if (nextSlide == "-200%") {
      setNextSlide("-100%");
      setNextText(!nextText);
    } else if (nextSlide == "-100%") {
      setNextSlide("0%");
      setNextText(!nextText);
    }
  }

  return (
    <div className={styles.slide_container}>
      <button className={styles.left_btn} onClick={sliderLeft}>
        <MdKeyboardArrowLeft />
      </button>
      <button className={styles.right_btn} onClick={sliderRight}>
        <MdKeyboardArrowRight />
      </button>
      <div className={styles.slide_wraper} style={{ marginLeft: nextSlide }}>
        <div className={styles.slide_item}>
          <div className={styles.slide_text}>
            <div
              className={nextText ? styles.textOnClick1 : styles.textOnClick2}
            >
              <h2 className={styles.title}>AUX Cash for Car</h2>
              <p className={styles.slide_p}>
                One of the largest Scrap AUX Cash for Car In Sydney.
              </p>
            </div>
            <div className={styles.d1}></div>
          </div>
          <div className={styles.bImage1}></div>
        </div>

        <div className={styles.slide_item}>
          <div className={styles.slide_text}>
            <div
              className={nextText ? styles.textOnClick1 : styles.textOnClick2}
            >
              <h2 className={styles.title}>AUX Cash for Car</h2>
              <p className={styles.slide_p}>
                One of the largest Scrap AUX Cash for Car In Sydney.
              </p>
            </div>
            <div className={styles.d1}></div>
          </div>
          <div className={styles.bImage2}></div>
        </div>

        <div className={styles.slide_item}>
          <div className={styles.slide_text}>
            <div
              className={nextText ? styles.textOnClick1 : styles.textOnClick2}
            >
              <h2 className={styles.title}>AUX Cash for Car</h2>
              <p className={styles.slide_p}>
                One of the largest Scrap AUX Cash for Car In Sydney.
              </p>
            </div>
            <div className={styles.d1}></div>
          </div>
          <div className={styles.bImage3}></div>
        </div>

        <div className={styles.slide_item}>
          <div className={styles.slide_text}>
            <div
              className={nextText ? styles.textOnClick1 : styles.textOnClick2}
            >
              <h2 className={styles.title}>AUX Cash for Car</h2>
              <p className={styles.slide_p}>
                One of the largest ScrapAUX AUX CASH FOR CAR In Sydney.
              </p>
            </div>
            <div className={styles.d1}></div>
          </div>
          <div className={styles.bImage4}></div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
