import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Massage from "@/components/Message"
import styles from '@/styles/BlogsPosts.module.css'
import Global from '@/styles/Global.module.css'

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

function post11() {
  return (
  <>
    <Head>
    <title>The Effect of the Car's Condition on the Price</title>
      <meta name="description" content="If you are selling a car, the condition of the vehicle is going to be one of the main factors that potential buyers will be looking at. A used car that is in good condition is going to be worth more than a used car that is in poor condition." />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, Car's Condition effects" />
      <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/blog/post11'} />
          
      <mata name="robots" content="index, follow"/>
      <meta property="og:url" content={'/blog/post11'} />
      <meta property="og:type" content="article" />
      <meta property='og:image' content={postImage} />
      <meta property='og:title' content="The Effect of the Car's Condition on the Price" />
      <meta property='og:description' content="If you are selling a car, the condition of the vehicle is going to be one of  
            the main factors that potential buyers will be looking at. A used car that is in good condition is 
            going to be worth more than a used car 
            that is in poor condition." />
    </Head>

    <div className={styles.postContainer}>
      <div className={styles.blogSL}>
        <div className={styles.imageContainer}>
          <Image
          width={1000}
          hei=  {1000}
          src = {postImage}
          title='Picking up damaged car'
          alt="picking up and removing damaged cars"
          />
        </div>
        <h1 className={styles.postTitle}>
          The Effect of the Car's Condition on the Price
        </h1>
        <div>
          <p>
          Regarding buying a car, the condition of the vehicle is one of the most important 
          factors that can affect the price. Whether you are looking to buy a new or used 
          car, the car's condition can play a huge role in how much it is worth.
          </p>
          <p>
            If you are looking to buy a new car, the condition of the vehicle is not as big 
            of a factor because the car is brand new and has never been driven. However, if 
            you are looking to buy a used car, the condition of the vehicle can have a 
            significant impact on the price.
          </p>
          <p>
            A used car that is in good condition is going to be worth more than a used car 
            that is in poor condition. This is because a used car in good condition is 
            going to be more reliable and last longer than a used car in poor condition. 
            When it comes to used cars, buyers are often willing to pay more for a car that 
            is in good condition because they know that they are getting a quality vehicle.
          </p>
          <p>
            If you are selling a car, the condition of the vehicle is going to be one of  
            the main factors that potential buyers will be looking at. If you are selling a 
            car that is in poor condition, you may have to sell it for a lower price than 
            you would if the car was in good condition. Conversely, if you are selling a 
            car that is in good condition, you could potentially sell it for a higher 
            price than you would if the car was in poor condition.
          </p>
          <p>
            The bottom line is that the condition of the car has a direct impact on the   
            price. If you are looking to buy or sell a car, the condition of the vehicle 
            is going to be one of the most important factors that will affect
          </p>
          
          <div className={styles.date}>
              <p>17 Feb 2023</p>
          </div>
          <div className={Global.flex}>
            <div className={styles.backButton} ><Link href={"/blog"}>Go Back</Link></div>
            <div className={Global.socialIconBox}>
                  <FacebookShareButton
                    url={'/blog/post11'}
                    quote={"If you are selling a car, the condition of the vehicle is going to be one of the main factors that potential buyers will be looking at. A used car that is in good condition is going to be worth more than a used car that is in poor condition."}
                    hashtag={'#cashForCar'}
                    image={postImage}  >
                    <FaFacebookSquare />
                  </FacebookShareButton>

                  <PinterestShareButton
                    url={'/blog/post11'}
                    quote={"If you are selling a car, the condition of the vehicle is going to be one of the main factors that potential buyers will be looking at. A used car that is in good condition is going to be worth more than a used car that is in poor condition."}
                    hashtag={'#cashForCar'}
                    image={postImage} >
                    <FaPinterestSquare />
                  </PinterestShareButton>

                  <TwitterShareButton
                    url={'/blog/post11'}
                    quote={"If you are selling a car, the condition of the vehicle is going to be one of the main factors that potential buyers will be looking at. A used car that is in good condition is going to be worth more than a used car that is in poor condition."}
                    hashtag={'#cashForCar'}
                    image={postImage}>
                    <FaTwitterSquare />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    url={'/blog/post11'}
                    quote={"If you are selling a car, the condition of the vehicle is going to be one of the main factors that potential buyers will be looking at. A used car that is in good condition is going to be worth more than a used car that is in poor condition."}
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

export default post11
