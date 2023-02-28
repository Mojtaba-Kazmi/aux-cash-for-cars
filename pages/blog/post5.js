import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Massage from "@/components/Message"
import styles from '@/styles/BlogsPosts.module.css'
import Global from '@/styles/Global.module.css'

import postImage from '@/public/images/Lifespan-of-a-Car.jpg'
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

function post5() {
  return (
  <>
    <Head>
      <title>What's the Average Lifespan of a Car?</title>
      <meta name="description" content="Depends on a number of factors, including the make and model of the vehicle, how well it is maintained, and the driving habits of the owner. In general, however, most cars have a lifespan of about 10 years or 150,000 miles, whichever comes first." />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, car lifespan, driving habits"></meta>
       <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/blog/post5'} />
          
      <mata name="robots" content="index, follow"/>
      <meta property="og:url" content={'/blog/post5'} />
      <meta property="og:type" content="article" />
      <meta property='og:image' content={postImage} />
      <meta property='og:title' content="What's the Average Lifespan of a Car?" />
      <meta property='og:description' content="Depends on a number of factors, including the make 
            and model of the vehicle, how well it is maintained, and the driving habits of 
            the owner. In general, however, most cars have a lifespan of about 10 years or 
            150,000 miles, whichever comes first." />
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
          What's the Average Lifespan of a Car?  
        </h1>
        <div>
          <p>
            The answer to this question depends on a number of factors, including the make 
            and model of the vehicle, how well it is maintained, and the driving habits of 
            the owner. In general, however, most cars have a lifespan of about 10 years or 
            150,000 miles, whichever comes first.
          </p>
          <p>
            Of course, there are always exceptions to this rule. For example, some luxury   
            cars and sports cars are designed to last much longer than 10 years. Similarly, 
            some budget-friendly cars may have a shorter lifespan. It really depends on the 
            individual vehicle.
          </p>
          <p>
          To get a better idea of what to expect from your car, it is always a good idea to 
          consult the owner’s manual. This will provide you with specific information on 
          how to best care for your car, which can help extend its lifespan. Additionally, 
          it is a good idea to stay up-to-date on all scheduled maintenance. This will help 
          keep your car running smoothly and prevent any major problems down the road.
          </p>
          <p>
              If you take good care of your car and drive responsibly, you can expect it to 
              last for many years to come. However, no car is built to last forever and 
              eventually, you will need to purchase a new one. When that time comes, be 
              sure to do your research and find a car that best suits your needs and 
              budget.
          </p>
         
          <div className={styles.date}>
              <p>17 Feb 2023</p>
          </div>
          <div className={Global.flex}>
            <div className={styles.backButton} ><Link href={"/blog"}>Go Back</Link></div>
            <div className={Global.socialIconBox}>
                  <FacebookShareButton
                    url={'/blog/post5'}
                    quote={"Depends on a number of factors, including the make and model of the vehicle, how well it is maintained, and the driving habits of the owner. In general, however, most cars have a lifespan of about 10 years or 150,000 miles, whichever comes first."}
                    hashtag={'#cashForCar'}
                    image={postImage}  >
                    <FaFacebookSquare />
                  </FacebookShareButton>

                  <PinterestShareButton
                    url={'/blog/post5'}
                    quote={"Depends on a number of factors, including the make and model of the vehicle, how well it is maintained, and the driving habits of the owner. In general, however, most cars have a lifespan of about 10 years or 150,000 miles, whichever comes first."}
                    hashtag={'#cashForCar'}
                    image={postImage} >
                    <FaPinterestSquare />
                  </PinterestShareButton>

                  <TwitterShareButton
                    url={'/blog/post5'}
                    quote={"Depends on a number of factors, including the make and model of the vehicle, how well it is maintained, and the driving habits of the owner. In general, however, most cars have a lifespan of about 10 years or 150,000 miles, whichever comes first."}
                    hashtag={'#cashForCar'}
                    image={postImage}>
                    <FaTwitterSquare />
                  </TwitterShareButton>

                  <WhatsappShareButton
                    url={'/blog/post5'}
                    quote={"Depends on a number of factors, including the make and model of the vehicle, how well it is maintained, and the driving habits of the owner. In general, however, most cars have a lifespan of about 10 years or 150,000 miles, whichever comes first."}
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

export default post5
