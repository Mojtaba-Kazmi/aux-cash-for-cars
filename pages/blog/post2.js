import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Massage from "@/components/Message"
import styles from '@/styles/BlogsPosts.module.css'
import Sharing from '@/styles/Sharing.module.css'

import postImage from '@/public/images/car.jpg'
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

function post2() {
  return (
  <>
    <Head>
      <title>Cars to Get Rid of: Signs you need a replacement one</title>
      <meta name="description" content="lead-acid batteries and lubricating oils in old cars pose a health risk. Used vehicles 
          have damaged parts that are dangerous for people. As a car ages, its repair 
          bills tend to increase. read on to learn signs it’s time to replace it." />
      <meta name="keywords" content="shaking and Noises in car, expensive repairs, replacement, Excessive Rust in cars"></meta>
       <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/blog/post2'} />
          
      <mata name="robots" content="index, follow"/>
      <meta property="og:url" content={'/blog/post2'} />
      <meta property="og:type" content="article" />
      <meta property='og:image' content={postImage} />
      <meta property='og:title' content='Cars to Get Rid of: Signs you need a replacement one' />
      <meta property='og:description' content="lead-acid batteries and lubricating oils in old cars pose a health risk. Used vehicles 
          have damaged parts that are dangerous for people. As a car ages, its repair 
          bills tend to increase. read on to learn signs it’s time to replace it." />
    </Head>

    <div className={styles.postContainer}>
      <div className={styles.blogSL}>
        <div className={styles.imageContainer}>
          <Image
          width={1000}
          height={1000}
          src = {postImage}
          title='Picking up damaged car'
          alt="replace your old car"
          />
        </div>
        <h1 className={styles.postTitle}>Cars to Get Rid of: Signs you need a replacement one</h1>
        <div>
          <p>
          Getting rid of old cars clutters up your garage or yard. Also, lead-acid 
          batteries and lubricating oils in old cars pose a health risk. Used vehicles may 
          also have damaged parts that are dangerous for people. As a car ages, its repair 
          bills tend to increase. read on to learn 3 signs it’s time to replace it if you 
          do not know whether or not to get rid of your car.
          </p>
          <h2>1.	Noises, Shaking, and Other Serious Symptoms</h2>
          <p>
            Vibration and noises are one of the most common and most bothersome problems 
            when owning a car for a long time. Most often, these shaking and noise problems 
            are caused by problems with the engine, axle, power steering, and motor 
            mounts. A simple fix, such as rotating or balancing tires, could suffice. 
            Unfortunately, it could also indicate some more serious problems, such as a 
            steering or suspension malfunction.
          </p>
          <h2>2.	Expensive Repairs </h2>
          <p>
             If the cost of repairs exceeds the value of your car, it's a good indication 
             that you should sell it. You can get your car running again, but you won't get 
             your money back if you sell it. If your vehicle is older or in poor condition, 
             you can expect more repairs in the near future.
          </p>
          <h2>3.	Excessive Rust</h2>
          <p>
             In spite of the fact that rust may seem like no big deal, it can cause serious 
             issues if left unattended, including fuel leaks, brake failures, or even 
             rusted appearance.
          </p>
          <p className={styles.date}>17 Feb 2023</p>
          <div className={Sharing.flex}>
            <div className={styles.backButton} ><Link href={"/blog"}>Go Back</Link></div>
            <div className={Sharing.socialIconBox}>
                  <FacebookShareButton
                    url={'/blog/post2'}
                    quote={"lead-acid batteries and lubricating oils in old cars pose a health risk. Used vehicles have damaged parts that are dangerous for people. As a car ages, its repair bills tend to increase. read on to learn signs it’s time to replace it."}
                    hashtag={'#cashForCar'}
                    image={postImage}  >
                    <FaFacebookSquare />
                  </FacebookShareButton>

                  <PinterestShareButton
                    url={'/blog/post2'}
                    quote={"lead-acid batteries and lubricating oils in old cars pose a health risk. Used vehicles have damaged parts that are dangerous for people. As a car ages, its repair bills tend to increase. read on to learn signs it’s time to replace it."}
                    hashtag={'#cashForCar'}
                    image={postImage} >
                    <FaPinterestSquare />
                  </PinterestShareButton>

                  <TwitterShareButton
                    url={'/blog/post2'}
                    quote={"lead-acid batteries and lubricating oils in old cars pose a health risk. Used vehicles have damaged parts that are dangerous for people. As a car ages, its repair bills tend to increase. read on to learn signs it’s time to replace it."}
                    hashtag={'#cashForCar'}
                    image={postImage}>
                    <FaTwitterSquare />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    url={'/blog/post2'}
                    quote={"lead-acid batteries and lubricating oils in old cars pose a health risk. Used vehicles have damaged parts that are dangerous for people. As a car ages, its repair bills tend to increase. read on to learn signs it’s time to replace it."}
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

export default post2
