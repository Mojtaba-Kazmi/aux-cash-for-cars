import Head from "next/head";
import Link from "next/link";

import Message from "@/components/Message";
import styles from "@/styles/Question.module.css";
function question3() {
  return (
    <>
      <Head>
        <title>How fast do AUX Cash for Car pick-up my car?</title>
        <meta
          name="description"
          content="We are one of the fastest car removal companies in Sydney. Typically, it'll take us between one and three days to pick up your car."
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car, fast, pick-up"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/faq/question3"} />

        <mata name="robots" content="index, follow" />
        <mata name="og:type" content="article" />
        <mata name="og:description" content="description" />
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.questionL}>
          <div className={styles.questionContainer}>
            <h1>How fast do AUX Cash for Car pick-up my car?</h1>
            <p>
              We are one of the fastest car removal companies in Sydney. That
              right - we will take your old car away in a flash! We are willing
              to remove your car at any time after receiving your vehicle
              information and after you accept our final offer.
            </p>
            <p>
              Typically, it will take us between one and three days to pick up
              your car. However, we always have a same-day pick-up option if
              that is what you are interested in. So, all you need to do is let
              our team know that you are interested in getting your car moved on
              the same day, and we can make this happen. Do not worry, we will
              not be late... unless you are late to tell us you need a same-day
              pick-up, of course!
            </p>
          </div>
          <div className={styles.backButton}>
            <Link href={"/faq"}>Go Back</Link>
          </div>
        </div>

        <div className={styles.questionR}>
          <Message />
        </div>
      </div>
    </>
  );
}

export default question3;
