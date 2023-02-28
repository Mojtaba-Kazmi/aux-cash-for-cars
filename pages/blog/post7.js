import React from "react";
import Image from "next/image";
import Head from "next/head";

import Massage from "@/components/Message";
import styles from "@/styles/BlogsPosts.module.css";
import Sharing from "@/styles/Sharing.module.css";

import postImage from "@/public/images/broken-down-cars.jpg";
import Link from "next/link";

import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "next-share";

function post7() {
  return (
    <>
      <Head>
        <title>Selling Your Car to a Relative</title>
        <meta
          name="description"
          content="The following steps are a guide you can follow if you want to sell your car to a relative. Once you have followed these steps, you are good to go!"
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car, selling to Relative"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/blog/post7"} />

        <mata name="robots" content="index, follow" />
        <meta property="og:url" content={"/blog/post7"} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={postImage} />
        <meta property="og:title" content="Selling Your Car to a Relative" />
        <meta
          property="og:description"
          content="The following steps are a guide you can follow if you want to sell your car to 
            a relative. Once you have followed these steps, you are good to go!"
        />
      </Head>

      <div className={styles.postContainer}>
        <div className={styles.blogSL}>
          <div className={styles.imageContainer}>
            <Image
              width={1000}
              height={1000}
              src={postImage}
              title="Picking up damaged car"
              alt="selling damaged cars"
            />
          </div>
          <h1 className={styles.postTitle}>Selling Your Car to a Relative</h1>
          <div>
            <p>
              If you are looking for a way to get rid of your old car, then you
              might want to consider selling it to your relatives. Just make
              sure you do not end up getting stuck with it again when they try
              to return it!
            </p>
            <p>
              The following steps are a guide you can follow if you want to sell
              your car to a relative. Once you have followed these steps, you
              are good to go!
            </p>
            <ol>
              <li>Talk to your relative about your plans to sell the car.</li>
              <li>
                Make sure you have all the necessary paperwork for the sale,
                including the title and registration.
              </li>
              <li>
                Determine a{" "}
                <Link className={Sharing.link} href={"/blog/post3"}>
                  fair price
                </Link>{" "}
                for the car.
              </li>
              <li>Write up a bill of sale and have both parties sign it.</li>
              <li>Transfer the title and registration to the new owner.</li>
              <li>
                Give your relative the keys and enjoy your new found freedom!
              </li>
            </ol>

            <div className={styles.date}>
              <p>17 Feb 2023</p>
            </div>
            <div className={Sharing.flex}>
              <div className={styles.backButton}>
                <Link href={"/blog"}>Go Back</Link>
              </div>
              <div className={Sharing.socialIconBox}>
                <FacebookShareButton
                  url={"/blog/post7"}
                  quote={
                    "The following steps are a guide you can follow if you want to sell your car to a relative. Once you have followed these steps, you are good to go!"
                  }
                  hashtag={"#cashForCar"}
                  image={postImage}
                >
                  <FaFacebookSquare />
                </FacebookShareButton>

                <PinterestShareButton
                  url={"/blog/post7"}
                  quote={
                    "The following steps are a guide you can follow if you want to sell your car to a relative. Once you have followed these steps, you are good to go!"
                  }
                  hashtag={"#cashForCar"}
                  image={postImage}
                >
                  <FaPinterestSquare />
                </PinterestShareButton>

                <TwitterShareButton
                  url={"/blog/post7"}
                  quote={
                    "The following steps are a guide you can follow if you want to sell your car to a relative. Once you have followed these steps, you are good to go!"
                  }
                  hashtag={"#cashForCar"}
                  image={postImage}
                >
                  <FaTwitterSquare />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={"/blog/post7"}
                  quote={
                    "The following steps are a guide you can follow if you want to sell your car to a relative. Once you have followed these steps, you are good to go!"
                  }
                  hashtag={"#cashForCar"}
                  image={postImage}
                >
                  <FaWhatsappSquare />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.artical}>
          <Massage />
        </div>
      </div>
    </>
  );
}

export default post7;
