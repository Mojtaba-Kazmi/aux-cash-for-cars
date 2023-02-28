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

function post8() {
  return (
  <>
    <Head>
      <title>Selling a car? How to Receive Payment Safely?</title>
      <meta name="description" content="If you're not careful while selling your car, you could end up getting scammed. In this article, we'll go over how to receive payment safely when selling your car, so you can avoid any potential issues." />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, getting scamed, recive payment safely"></meta>
      <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/blog/post8'} />
          
      <mata name="robots" content="index, follow"/>
      <meta property="og:url" content={'/blog/post8'} />
      <meta property="og:type" content="article" />
      <meta property='og:image' content={postImage} />
      <meta property='og:title' content='Selling a car? How to Receive Payment Safely?' />
      <meta property='og:description' content="If you're not careful while selling your car, you could end up getting scammed. In this article, we'll 
            go over how to receive payment safely when selling your car, so you can avoid 
            any potential issues." />
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
          Selling a car? How to Receive Payment Safely?
        </h1>
        <div>
          <p> 
            Selling your car can be a quick and easy way to get some extra money. However, 
            if you're not careful, you could end up getting scammed. In this article, we'll 
            go over how to receive payment safely when selling your car, so you can avoid 
            any potential issues.
          </p>
          <p>
            One of the most important things to do when selling your car is to meet the   
            buyer in person. This way, you can make sure that the buyer is legitimate, and 
            you can also get a sense of what they're like. If you're meeting the buyer for 
            the first time, be sure to meet in a public place, such as a coffee shop or a 
            park. This will help to make sure your safety.
          </p>
          <p>
            Regarding receiving payment, you'll want to be careful. One of the most common  
            scams is for the buyer to send you a check for more than the agreed upon 
            amount, and then ask you to send them the difference. If you do this, you'll 
            likely never see the money, as the check will bounce.
          </p>
          <p>
            Instead, you should only accept payment in the form of cash, a cashier's check, 
            or a money order. If the buyer wants to pay by check, be sure to wait until the 
            check has cleared before releasing the car. With cash, you can simply count the 
            money to make sure it's all there. With a cashier's check or money order, 
            you'll need to wait for it to clear, which can take a few days.
          </p>
          <p>
            Once you have the payment, you'll want to sign over the title to the buyer. Be  
            sure to get their name, address, and phone number.
          </p>
         
          <div className={styles.date}>
              <p>17 Feb 2023</p>
          </div>
          <div className={Global.flex}>
            <div className={styles.backButton} ><Link href={"/blog"}>Go Back</Link></div>
            <div className={Global.socialIconBox}>
                  <FacebookShareButton
                    url={'/blog/post8'}
                    quote={"If you're not careful while selling your car, you could end up getting scammed. In this article, we'll go over how to receive payment safely when selling your car, so you can avoid any potential issues."}
                    hashtag={'#cashForCar'}
                    image={postImage}  >
                    <FaFacebookSquare />
                  </FacebookShareButton>

                  <PinterestShareButton
                    url={'/blog/post8'}
                    quote={"If you're not careful while selling your car, you could end up getting scammed. In this article, we'll go over how to receive payment safely when selling your car, so you can avoid any potential issues."}
                    hashtag={'#cashForCar'}
                    image={postImage} >
                    <FaPinterestSquare />
                  </PinterestShareButton>

                  <TwitterShareButton
                    url={'/blog/post8'}
                    quote={"If you're not careful while selling your car, you could end up getting scammed. In this article, we'll go over how to receive payment safely when selling your car, so you can avoid any potential issues."}
                    hashtag={'#cashForCar'}
                    image={postImage}>
                    <FaTwitterSquare />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    url={'/blog/post8'}
                    quote={"If you're not careful while selling your car, you could end up getting scammed. In this article, we'll go over how to receive payment safely when selling your car, so you can avoid any potential issues."}
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

export default post8
