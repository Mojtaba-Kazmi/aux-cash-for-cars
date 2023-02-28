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

function post9() {
  return (
  <>
    <Head>
    <title>Junk Car Removal Near Me: Get Top Dollar for Your Old Car</title>
      <meta name="description" content="Junk car removal companies specialize in buying old, useless cars and then either recycling them or selling them for parts. This is a great option if you want to get rid of your car quickly and without hassle. Read on to learn more about how junk car removal works " />
      <meta name="keywords" content="cash for cars sydney, Car Removal near me,sell my old car, useless cars, junk car removal"></meta>
       <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/blog/post9'} />
          
      <mata name="robots" content="index, follow"/>
      <meta property="og:url" content={'/blog/post9'} />
      <meta property="og:type" content="article" />
      <meta property='og:image' content={postImage} />
      <meta property='og:title' content='Junk Car Removal Near Me: Get Top Dollar for Your Old Car' />
      <meta property='og:description' content="Junk car removal companies specialize in buying old, useless cars and then  
            either recycling them or selling them for parts. This is a great option if you 
            want to get rid of your car quickly and without hassle. Read on to learn more 
            about how junk car removal works " />
    </Head>

    <div className={styles.postContainer}>
      <div className={styles.blogSL}>
        <div className={styles.imageContainer}>
          <Image
          width={1000}
          height={1000}
          src = {postImage}
          title='Picking up damaged car'
          alt="cash for old car"
          />
        </div>
        <h1 className={styles.postTitle}>
          Junk Car Removal Near Me: Get Top Dollar for Your Old Car
        </h1>
        <div>
          <p>
          If you have an old car that you're trying to get rid of, you may be wondering 
          about the best way to go about it. You could try to sell it, but depending on the 
          condition of the car, that may not be easy. Instead, you might want to consider 
          junk car removal services.
          </p>
          <p>
            Junk car removal companies specialize in buying old, useless cars and then  
            either recycling them or selling them for parts. This is a great option if you 
            want to get rid of your car quickly and without hassle. Read on to learn more 
            about <Link className={Sharing.link} href={'/howItWorks'}>how junk car removal works</Link> and <Link className={Sharing.link} href={'/blog/post4'}>how to find the best companies near you</Link>.
          </p>
          <h2>What Is Junk Car Removal?</h2>
          <p>
            Junk car removal is the process of selling an old car to a company that   
            specializes in buying and recycling them. These companies will take your car 
            off your hands and either recycle the materials or sell the car for parts.
          </p>
          <p>
            The process is usually very simple. You <Link className={Sharing.link} href={'/contact'}>contact</Link> the company and let them know 
            that you have a car that you want to sell. They will give you a quote based on 
            the make, model, and condition of the car. If you accept the quote, they will 
            come to pick up the car and take it away.
          </p>
          <p>
             The whole process can usually be done within a few days, and it's a great way 
             to get rid of an old car that you no longer want or need.
          </p>
          <h2>Why Use Junk Car Removal Services?</h2>
          <p>
            There are a few reasons you might want to use junk car removal <Link className={Sharing.link} href={'/services'}>services</Link> rather  
            than trying to sell the car yourself.
          </p>
          <p>
            For one, it's much easier. You don't have to worry
          </p>
          <p>
            If you're looking for a junk car removal company near you, <Link className={Sharing.link} href={'/'}>AUX Cash for Car Sydney</Link> is
             a quality top junk car buyer. We can buy your car wherever you are 
            in Sydney.
          </p>
         
          <div className={styles.date}>
              <p>17 Feb 2023</p>
          </div>
          <div className={Sharing.flex}>
            <div className={styles.backButton} ><Link href={"/blog"}>Go Back</Link></div>
            <div className={Sharing.socialIconBox}>
                  <FacebookShareButton
                    url={'/blog/post9'}
                    quote={"Junk car removal companies specialize in buying old, useless cars and then either recycling them or selling them for parts. This is a great option if you want to get rid of your car quickly and without hassle. Read on to learn more about how junk car removal works "}
                    hashtag={'#cashForCar'}
                    image={postImage}  >
                    <FaFacebookSquare />
                  </FacebookShareButton>

                  <PinterestShareButton
                    url={'/blog/post9'}
                    quote={"Junk car removal companies specialize in buying old, useless cars and then either recycling them or selling them for parts. This is a great option if you want to get rid of your car quickly and without hassle. Read on to learn more about how junk car removal works "}
                    hashtag={'#cashForCar'}
                    image={postImage} >
                    <FaPinterestSquare />
                  </PinterestShareButton>

                  <TwitterShareButton
                    url={'/blog/post9'}
                    quote={"Junk car removal companies specialize in buying old, useless cars and then either recycling them or selling them for parts. This is a great option if you want to get rid of your car quickly and without hassle. Read on to learn more about how junk car removal works "}
                    hashtag={'#cashForCar'}
                    image={postImage}>
                    <FaTwitterSquare />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    url={'/blog/post9'}
                    quote={"Junk car removal companies specialize in buying old, useless cars and then either recycling them or selling them for parts. This is a great option if you want to get rid of your car quickly and without hassle. Read on to learn more about how junk car removal works "}
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

export default post9
