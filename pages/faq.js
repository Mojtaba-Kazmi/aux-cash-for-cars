import Link from "next/link";

import Message from "@/components/Message";
import styles from "@/styles/Faq.module.css";
import Head from "next/head";

function FrequentlyQuestion() {
  return (
    <>
      <Head>
        <title>FAQs - Aux Cash For Cars</title>
        <meta
          name="description"
          content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars"
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car, why a cash for car, brands, fast pick-up, price of damaged cars, car title"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/faq"} />

        <mata name="robots" content="index, follow" />
      </Head>

      <div className={styles.faqContainer}>
        <h1 className={styles.faqTitle}>Frequently asked questions</h1>

        <div className={styles.bodyContainer}>
          <div className={styles.faqL}>
            <div className={styles.questionContainer}>
              <Link href={"/faq/question1"}>
                <h2 className={styles.question}>
                  Why should I choose AUX Cash for Car?
                </h2>
              </Link>
              <p className={styles.answer}>
                The following are some reasons why you should choose AUX Cash
                for Car.
                <Link href={"/faq/question1"}> Read More</Link>
              </p>
            </div>

            <div className={styles.questionContainer}>
              <Link href={"/faq/question2"}>
                <h2 className={styles.question}>
                  What kind of cars does AUX Cash for Car buy?
                </h2>
              </Link>
              <p className={styles.answer}>
                AUX Cash for Car will purchase damaged vehicles of any type,
                including vehicles with physical, electrical or mechanical
                damage as well as vehicles with high...
                <Link href={"/faq/question2"}> Read More</Link>
              </p>
            </div>

            <div className={styles.questionContainer}>
              <Link href={"/faq/question3"}>
                <h2 className={styles.question}>
                  How fast do AUX Cash for Car pick-up my car?
                </h2>
              </Link>
              <p className={styles.answer}>
                We are one of the fastest car removal companies in Sydney. That
                right - we will take your old car away in a flash! We are
                willing to remove your car at any time after receiving your
                vehicle information and after you accept...
                <Link href={"/faq/question3"}> Read More</Link>
              </p>
            </div>

            <div className={styles.questionContainer}>
              <Link href={"/faq/question4"}>
                <h2 className={styles.question}>
                  How much I should expect for my car?
                </h2>
              </Link>
              <p className={styles.answer}>
                Our team utilizes the most advanced technologies to calculate a
                fair offer representing how much your vehicle is. Therefore, we
                cannot say exactly how much you will get there unless we...
                <Link href={"/faq/question4"}> Read More</Link>
              </p>
            </div>

            <div className={styles.questionContainer}>
              <Link href={"/faq/question5"}>
                <h2 className={styles.question}>
                  Will you buy my car if it doesn’t have title?
                </h2>
              </Link>
              <p className={styles.answer}>
                Of course, we do! The situation of not having a vehicle title
                can occur in many ways. It might be destroyed for whatever
                reason. In any case, we will ask you for additional...
                <Link href={"/faq/question5"}> Read More</Link>
              </p>
            </div>
          </div>

          <div className={styles.faqR}>
            <Message />
          </div>
        </div>
      </div>
    </>
  );
}

export default FrequentlyQuestion;
