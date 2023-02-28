import React from 'react'
import styles from '@/styles/Servises.module.css'
import Image from 'next/image'
import services_pic1 from '@/public/images/our-services1.jpg'
import services_pic2 from '@/public/images/our-services2.jpg'
import services_pic3 from '@/public/images/our-services3.jpg'
import Link from 'next/link'
import Head from 'next/head'
import Global from '@/styles/Global.module.css';


function services() {
  return (
    <>
    <Head>
      <title>Aux Cash For Cars Sydney & Car Removals</title>
      <meta name="description" content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars" />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car,"></meta>
      <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/services'} />
      
      <mata name="robots" content="index, follow"/>
      <meta property='og:image' content={services_pic1} />
      <meta property='og:title' content='Aux Cash For Cars Sydney & Car Removals' />
      <meta property='og:description' content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars" />
    </Head>
    <h1 className={styles.sevices_title}>Our services</h1>
    <div className={styles.services_container}>
        

        <div className={styles.servises_item}>
          <Image
          src={services_pic1}
            title='Damaged car'
            alt="picking up and removing damaged cars"
          width={500}
          />
          <h2>Cash For Cars Sydney</h2>
          <p>
            We offer collection and transport of various recycling products including old   
            and scrap vehicles, scrap material of civil, construction, and demolition. All 
            types of vehicles are eligible for our cash for cars services. We provide free 
            pickup services in all across of Sydney, Sydney West, East, Northern Beaches, 
            Wollongong, Inner West, Great Western Sydney, North Shore, Macarthur, and the 
            Hills. our services are fast, save, and 24 hours. Make yourself unconcerned 
            with (<Link className={Global.link} href={'/'}>AUX Cash for Car Sydney</Link>) and earn a good amount of money for your car. 
          </p>
        </div>

        <div className={styles.servises_item}>
          <Image
          src={services_pic2}
            title='Picking up damaged car'
            alt="picking up and removing damaged cars"
          width={500}
          />
          <h2>Cash for Scrap Metal Sydney</h2>
          <p>
            Millions of tons of scrap metal is sitting unused in garages and basements 
            across the country, when it could be earning you some extra cash. As part of 
            our various recycling products services, collecting and recycling of metal is 
            also considered. We offer all kinds of metals, metals related to the old, scrap 
            or unwanted appliances of home, construction, demolition, civil and other 
            related metals such as refrigerators, washing mashies, TVs and other related 
            items.  
            </p>
        </div>

        <div className={styles.servises_item}>
          <Image
          src={services_pic3}
            title='Damaged car'
            alt="picking up and removing damaged cars"
          width={500}
          />
          <h2>Cash For Bins Sydney</h2>
          <p>
            With (<Link className={Global.link} href={'/'}>AUX Cash for Car Sydney</Link>) you can even change your waste to cash. We have 
            provided free pickup and replacement of the bins within 48 hours. Considered 
            payment will be pay once the bin received in the area where they get weighed, 
            inspected and graded. We have a lot of bins in different size that meet the 
            needs of our clients.
          </p>
        </div>
      
    </div>
    </>
  )
}

export default services
