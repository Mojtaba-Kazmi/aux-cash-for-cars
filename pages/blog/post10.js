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

function post10() {
  return (
  <>
    <Head>
    <title>Selling Junk Cars: Laws to Know</title>
      <meta name="description" content="it's essential to be aware of the laws and regulations that govern the process. This will help ensure that everything goes smoothly and you get the most for your car." />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, sell legally, selling laws"></meta>
       <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/blog/post10'} />
          
      <mata name="robots" content="index, follow"/>
      <meta property="og:url" content={'/blog/post10'} />
      <meta property="og:type" content="article" />
      <meta property='og:image' content={postImage} />
      <meta property='og:title' content='Selling Junk Cars: Laws to Know' />
      <meta property='og:description' content="it's essential to be aware of the laws and regulations that govern the 
              process. This will help ensure that everything goes smoothly and you get the most for your car." />
    </Head>

    <div className={styles.postContainer}>
      <div className={styles.blogSL}>
        <div className={styles.imageContainer}>
          <Image
          width={1000}
          height={1000}
          src = {postImage}
          title='Picking up damaged car'
          alt="selling junk cars laws"
          />
        </div>
        <h1 className={styles.postTitle}>
          Selling Junk Cars: Laws to Know
        </h1>
        <div>
          <p>
              When you've finally come to the decision that it's time to sell your junk   
              car, it's essential to be aware of the laws and regulations that govern the 
              process. This will help ensure that everything goes smoothly and you get the 
              most for your car. The first step is to <Link className={Sharing.link} href={'/blog/post4'}>find a reputable junk car removal 
              company</Link>. There are many companies that will pay cash for junk cars, but it's 
              important to find one that is licensed and insured. As one of the leading 
              junk car buyers near you, <Link className={Sharing.link} href={'/'}>AUX Cash for Car</Link> is one of the top companies in 
              the industry. So, if you're looking for someone to buy your old junk car, you 
              know who to call: <Link className={Sharing.link} href={'/contact'}>AUX Cash for Car</Link>. We'll even make you an offer you won't 
              refuse! Regardless of where you are in Sydney, we are able to buy your car.
          </p>
          <p>
            Once you've found a company that you're comfortable with, you'll need to 
            provide them with some basic information about your car. This will include the 
            make, model, year, and condition of the car. You should also have the title to 
            the car. If you don't have the title, the company may still be able to buy the 
            car, but they will likely give you a lower price for it.
          </p>
          <p>
            The company will then give you a quote for your car. Once you accept the quote, 
            they will send a tow truck to pick up the car. The entire process should be 
            quick and easy, and you'll have cash in hand for your junk car.
          </p>
          <div className={styles.date}>
              <p>17 Feb 2023</p>
          </div>
          <div className={Sharing.flex}>
            <div className={styles.backButton} ><Link href={"/blog"}>Go Back</Link></div>
            <div className={Sharing.socialIconBox}>
                  <FacebookShareButton
                    url={'/blog/post10'}
                    quote={"it's essential to be aware of the laws and regulations that govern the process. This will help ensure that everything goes smoothly and you get the most for your car."}
                    hashtag={'#cashForCar'}
                    image={postImage}  >
                    <FaFacebookSquare />
                  </FacebookShareButton>

                  <PinterestShareButton
                    url={'/blog/post10'}
                    quote={"it's essential to be aware of the laws and regulations that govern the process. This will help ensure that everything goes smoothly and you get the most for your car."}
                    hashtag={'#cashForCar'}
                    image={postImage} >
                    <FaPinterestSquare />
                  </PinterestShareButton>

                  <TwitterShareButton
                    url={'/blog/post10'}
                    quote={"it's essential to be aware of the laws and regulations that govern the process. This will help ensure that everything goes smoothly and you get the most for your car."}
                    hashtag={'#cashForCar'}
                    image={postImage}>
                    <FaTwitterSquare />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    url={'/blog/post10'}
                    quote={"it's essential to be aware of the laws and regulations that govern the process. This will help ensure that everything goes smoothly and you get the most for your car."}
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

export default post10
