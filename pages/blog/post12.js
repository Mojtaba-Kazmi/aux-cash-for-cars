import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Massage from "@/components/Message"
import styles from '@/styles/BlogsPosts.module.css'
import Sharing from '@/styles/Sharing.module.css'

import postImage from '@/public/images/broken-down-cars.jpg'
import Link from 'next/link'

import { FaFacebookSquare, 
  FaPinterestSquare, 
  FaTwitterSquare, 
  FaWhatsappSquare 
} from "react-icons/fa";
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from 'next-share';

function post12() {
  return (
  <>
    <Head>
      <title>The Benefits of Using a Professional Junk Car Removal Service Near You</title>
      <meta name="description" content="If you're looking to get rid of an old car, it's important to find a professional junk car removal service near you. There are many benefits to using a professional junk car removal service, including:" />
      <meta name="keywords" content="cash for cars sydney, Car Removal near me,sell my old car,process is quick and easy"></meta>
       <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/blog/post12'} />
          
      <mata name="robots" content="index, follow"/>
      <meta property="og:url" content={'/blog/post12'} />
      <meta property="og:type" content="article" />
      <meta property='og:image' content={postImage} />
      <meta property='og:title' content='The Benefits of Using a Professional Junk Car Removal Service Near You' />
      <meta property='og:description' content="If you're looking to get rid of an old car, it's 
              important to find a professional junk car removal service near you. There 
              are many benefits to using a professional junk car removal service, including:" />
    </Head>

    <div className={styles.postContainer}>
      <div className={styles.blogSL}>
        <div className={styles.imageContainer}>
          <Image
          width={1000}
          height={1000}
          src = {postImage}
          title='Picking up damaged car'
          alt="junk car removal services"
          />
        </div>
        <h1 className={styles.postTitle}>
          The Benefits of Using a Professional Junk Car Removal Service Near You
        </h1>
        <div>
          <p>
              There are many reasons why you might want to get rid of an old car. It may be 
              that it's reached the end of its life and is starting to break down, or it 
              could be that it's been involved in an accident and is no longer roadworthy. 
              Regardless of the reason, if you're looking to get rid of an old car, it's 
              important to find a professional junk car removal service near you.
          </p>
          <p>
              There are many benefits to using a professional junk car removal service, 
              including:
          </p>
          <ul>
            <li>
            You won't have to worry about disposing of the car yourself.
            </li>
            <li>
              The process is quick and easy.
            </li>
            <li>
              You'll receive cash for your car.
            </li>
            <li>
              The service is environmentally friendly.
            </li>
            <li>
              You won't have to worry about your car ending up in a landfill.
            </li>
          </ul>
          <p>
            When you use a professional junk car removal service, you can rest assured that 
            your car will be disposed of in a safe and environmentally friendly manner. The 
            process is quick and easy, and you'll even receive cash for your car. So, if 
            you're looking to get rid of an old car, be sure to use a professional junk car 
            removal service near you like <Link className={Sharing.link} href={'/'}>AUX Cash for Car Sydney</Link>.
          </p>
          
          <div className={styles.date}>
              <p>17 Feb 2023</p>
          </div>
          <div className={Sharing.flex}>
            <div className={styles.backButton} ><Link href={"/blog"}>Go Back</Link></div>
            <div className={Sharing.socialIconBox}>
                  <FacebookShareButton
                    url={'/blog/post12'}
                    quote={"If you're looking to get rid of an old car, it's important to find a professional junk car removal service near you. There are many benefits to using a professional junk car removal service, including:"}
                    hashtag={'#cashForCar'}
                    image={postImage}  >
                    <FaFacebookSquare />
                  </FacebookShareButton>

                  <PinterestShareButton
                    url={'/blog/post12'}
                    quote={"If you're looking to get rid of an old car, it's important to find a professional junk car removal service near you. There are many benefits to using a professional junk car removal service, including:"}
                    hashtag={'#cashForCar'}
                    image={postImage} >
                    <FaPinterestSquare />
                  </PinterestShareButton>

                  <TwitterShareButton
                    url={'/blog/post12'}
                    quote={"If you're looking to get rid of an old car, it's important to find a professional junk car removal service near you. There are many benefits to using a professional junk car removal service, including:"}
                    hashtag={'#cashForCar'}
                    image={postImage}>
                    <FaTwitterSquare />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    url={'/blog/post12'}
                    quote={"If you're looking to get rid of an old car, it's important to find a professional junk car removal service near you. There are many benefits to using a professional junk car removal service, including:"}
                    hashtag={'#cashForCar'}
                    image={postImage} >
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
  )
}

export default post12
