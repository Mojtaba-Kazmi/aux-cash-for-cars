import React from "react";
import Image from "next/image";
import Head from "next/head";

import Massage from "@/components/Message";
import styles from "@/styles/BlogsPosts.module.css";
import Sharing from "@/styles/Sharing.module.css";

import postImage from "@/public/images/flood-damaged-car.jpg";
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

function post6() {
  return (
    <>
      <Head>
        <title>Can I sell a flood-damaged car legally?</title>
        <meta
          name="description"
          content="Selling a flood damaged car can be a bit of a hassle, but as long as you are honest about the condition of the car, you should be able to sell it without any problems."
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car, sell legally"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/blog/post6"} />

        <mata name="robots" content="index, follow" />
        <meta property="og:url" content={"/blog/post6"} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={postImage} />
        <meta
          property="og:title"
          content="Can I sell a flood-damaged car legally?"
        />
        <meta
          property="og:description"
          content="Selling a flood damaged car can be a bit of a hassle, but as long as you are  
            honest about the condition of the car, you should be able to sell it without 
            any problems."
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
              alt="sell flood-damaged cars legally"
            />
          </div>
          <h1 className={styles.postTitle}>
            Can I sell a flood-damaged car legally?
          </h1>
          <div>
            <p>
              Selling a flood damaged car is a tricky business. There are many
              factors to consider before making the sale, such as the legalities
              involved and the condition of the car. However, as long as you are
              honest about the condition of the car and disclose any damage, you
              should be able to sell your car without any problems.
            </p>
            <p>
              In the past, selling a car that had been damaged in a flood was
              considered illegal. This was because the car would not be able to
              pass a safety inspection and would be considered a safety hazard.
              However, this is no longer the case. With advances in technology,
              it is now possible to repair most flood damaged cars so that they
              are safe to drive.
            </p>
            <p>
              There are a few things to keep in mind if you are planning on
              selling a flood damaged car.
            </p>
            <p>
              List it for sale. When listing the car, be sure to disclose that
              it was damaged in a flood. This will let potential buyers know
              what they are getting into and will help to avoid any
              misunderstandings later on.
            </p>
            <p>
              Selling a flood damaged car can be a bit of a hassle, but as long
              as you are honest about the condition of the car, you should be
              able to sell it without any problems.
            </p>

            <div className={styles.date}>
              <p>17 Feb 2023</p>
            </div>
            <div className={Sharing.flex}>
              <div className={styles.backButton}>
                <Link href={"/blog"}>Go Back</Link>
              </div>
              <div className={Sharing.socialIconBox}>
                <FacebookShareButton
                  url={"/blog/post6"}
                  quote={
                    "Selling a flood damaged car can be a bit of a hassle, but as long as you are honest about the condition of the car, you should be able to sell it without any problems."
                  }
                  hashtag={"#cashForCar"}
                  image={postImage}
                >
                  <FaFacebookSquare />
                </FacebookShareButton>

                <PinterestShareButton
                  url={"/blog/post6"}
                  quote={
                    "Selling a flood damaged car can be a bit of a hassle, but as long as you are honest about the condition of the car, you should be able to sell it without any problems."
                  }
                  hashtag={"#cashForCar"}
                  image={postImage}
                >
                  <FaPinterestSquare />
                </PinterestShareButton>

                <TwitterShareButton
                  url={"/blog/post6"}
                  quote={
                    "Selling a flood damaged car can be a bit of a hassle, but as long as you are honest about the condition of the car, you should be able to sell it without any problems."
                  }
                  hashtag={"#cashForCar"}
                  image={postImage}
                >
                  <FaTwitterSquare />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={"/blog/post6"}
                  quote={
                    "Selling a flood damaged car can be a bit of a hassle, but as long as you are honest about the condition of the car, you should be able to sell it without any problems."
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

export default post6;
