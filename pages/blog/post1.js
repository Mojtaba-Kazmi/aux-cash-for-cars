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

function post1() {
  return (
  <>
    <Head>
      <title>Who Buys the broken-down-cars in Sydney? </title>
      <meta name="description" content="You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!" />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, pick up car for free"></meta>
       <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/blog/post1'} />
          
      <mata name="robots" content="index, follow"/>
      <meta property="og:url" content={'/blog/post1'} />
      <meta property="og:type" content="article" />
      <meta property='og:image' content={postImage} />
      <meta property='og:title' content='Who Buys the broken-down-cars in Sydney?' />
      <meta property='og:description' content="You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!" />
    </Head>

    <div className={styles.postContainer}>
      <div className={styles.blogSL}>
        <div className={styles.imageContainer}>
          <Image
          width={1000}
          height={1000}
          src = {postImage}
          title='Picking up damaged car'
          alt="who buys broken-down cars"
          />
        </div>
        <h1 className={styles.postTitle}>
          Who Buys the broken-down-cars in Sydney?   
        </h1>
        <div>
          <p>
            Want to get rid of your current old vehicle? Wondering who buys used cars in 
            any condition, or how you can exchange your vehicle for cash?
          </p>
          <p>
            You can sell your broken down car to us for good cash. In addition, since it is 
            a car that does not work, you will have to pay to toll on it. The good news is 
            that we will pick up your car for free. It’s FREE!
          </p>
          <p>
            <Link className={Sharing.link} href={'/'}>AUX Cash for Car Sydney</Link> is a quality top junk car buyer. We can buy your car 
              wherever you are in the Sydney. Our employees will come to you, 
              whether you are at home or at the office. The process is transparent and 
              convenient. If you find yourself asking, “Who buys the broken-down-cars?” 
              Visit our <Link className={Sharing.link} href={'/'}>website</Link> and you will find out. We don’t offer lowball prices. 
              That’s because we want to be fair to our customers.
          </p>
          <p className={styles.date}>14 Feb 2023</p>
          <div className={Sharing.postFooter}>

            <div className={styles.backButton} ><Link href={"/blog"}>Go Back</Link></div>

            <div className={Sharing.socialIconBox}>
              <FacebookShareButton
                url={'/blog/post1'}
                quote={'You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!'}
                hashtag={'#cashForCar'}
                image={postImage}  >
                <FaFacebookSquare />
              </FacebookShareButton>

              <PinterestShareButton
                url={'/blog/post1'}
                quote={'You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!'}
                hashtag={'#cashForCar'}
                image={postImage} >
                <FaPinterestSquare />
              </PinterestShareButton>

              <TwitterShareButton
                url={'/blog/post1'}
                quote={'You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!'}
                hashtag={'#cashForCar'}
                image={postImage}>
                <FaTwitterSquare />
              </TwitterShareButton>

              <WhatsappShareButton
                url={'/blog/post1'}
                quote={'You can sell your broken down car to us for good cash. In addition, since it is a car that does not work, you will have to pay to toll on it. The good news is that we will pick up your car for free. It’s FREE!'}
                hashtag={'#cashForCar'}
                image={postImage} >
                <FaWhatsappSquare />
              </WhatsappShareButton>
            </div>

          </div>
        </div>

      </div>
      <div className={styles.artical}><Massage /></div>
    </div>
  </>
  )
}

export default post1
