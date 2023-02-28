import React from 'react'
import styles from '@/styles/About.module.css'
import Image from 'next/image'
import pic_A_1 from '@/public/images/About-us.png'
import Head from 'next/head'
import Link from 'next/link'
import Global from '@/styles/Global.module.css';

function About() {
  return (
    <>
      <Head>
        <title>About - Aux Cash For Cars</title>
        <meta name="description" content="(AUX CAR FOR CASH Sydney) Has Been Pioneering The Metal Resource Recycling 
              Industry In Sydney Region, Australia Since 2010 That Mostly Has 
              Been Active In Car Removal Industry." />
        <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car,"></meta>
        <link rel="icon" href="/favicon.ico"/>
        <link rel='canonical' href={'/about'} />
        
        <mata name="robots" content="index, follow"/>
        <meta property='og:image' content={pic_A_1} />
        <meta property='og:title' content='About - Aux Cash For Cars' />
        <meta property='og:description' content="(AUX CAR FOR CASH Sydney) Has Been Pioneering The Metal Resource Recycling 
              Industry In Sydney Region, Australia Since 2010 That Mostly Has 
              Been Active In Car Removal Industry." />
      </Head>
      <div className={styles.About_us_contianer}>
        <div className={styles.about_s_l}>
          <h2>ABOUT US</h2>
          <p>
              <span>
              (<Link href={'/'} className={Global.link}>AUX Cash for Car Sydney</Link>) has been pioneering the metal resource recycling 
              industry in Sydney region, Australia since 2010 that mostly has 
              been active in car removal industry.
              </span>
              We specialize in recycling and reprocessing of cars that generally include 
              old, scrap or unwanted cars, general scrap metal, white goods, demolition 
              waste, with use of the advanced equipment and new, inventive and innovative 
              methods that benefits the environment and eventually provide opportunities and 
              contributes to the Australian economy, and make a connection between Australian 
              interstate consumer as well as international customer and markets.  
          </p>
          <p>
          At (<Link href={'/'} className={Global.link}>AUX Cash for Car Sydney</Link>) we try to start by understanding our client’s needs. 
          Once we informed then we work out the best time and payment we can offer. Our goal 
          at (<Link href={'/'} className={Global.link}>AUX Cash for Car Sydney</Link>) is to offer our clients stress-free, good and friendly 
          car removal service in Sydney and the surrounding. We cover all regions including 
          SYDNEY WEST, EAST, NORTHERN BEACHES, WOLLONGONG, INNER WEST, GREAT WESTERN SYDNEY, 
          NORTH SHORE, MACARTHUR, AND THE HILLS.
          (<Link href={'/'} className={Global.link}>AUX Cash for Car Sydney</Link>) give you up to $9999 for your old, junk, damaged or 
          unwanted car on the same receiving moment, anywhere in the Sydney. 

          </p>
          <p>
            If you are planning to sell your unwanted car for some cash in Sydney, you have 
            come in the right place, because (<Link href={'/'} className={Global.link}>AUX Cash for Car Sydney</Link>) offers you up to $9999 
            for your old car. 
        </p>
        <p>
          We are one of the biggest, busiest and the most active car removal firms in Sydney 
          that always pay you the highest amount of cash for your old car regardless of the 
          age, condition, make and model of the car, and always does it at the same 
          receiving moment of the car. 
        </p>
        </div>
        <div className={styles.about_s_r}>
              <Image 
                src={pic_A_1}
                width={1000} 
              />
        </div>
      </div>
    </>
  )
}

export default About
