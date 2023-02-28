import Head from 'next/head'
import Link from 'next/link'

import Message from '@/components/Message'
import styles from '@/styles/Question.module.css'
import Sharing from '@/styles/Sharing.module.css'

function question2() {
  return (
    <>
    <Head>
      <title>What kind of cars does AUX Cash for Car buy?</title>
      <meta name="description" content="AUX Cash for Car will purchase damaged vehicles of any type, including vehicles with physical, electrical or mechanical damage as well as vehicles with high mileage." />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, damaged vehicles" />
      <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/faq/question2'} />
      
      <mata name="robots" content="index, follow"/>
      <mata name="og:type" content="article"/>
      <mata name="og:description" content="description"/>
    </Head>
    <div className={styles.pageContainer}>
    
      <div className={styles.questionL}>
        <div className={styles.questionContainer}>
            <h1>What kind of cars does AUX Cash for Car buy?</h1>
            <p>
              <Link className={Sharing.link} href={'/'}>AUX Cash for Car</Link> will purchase damaged vehicles of any type, including vehicles 
                with physical, electrical or mechanical damage as well as vehicles with high mileage.
                We're even experienced with buying luxury, exotic and classic cars. AUX Cash for 
                Car is able to offer competitive prices for damaged vehicles because we have the 
                expertise to know how to repair and restore them. We also have the resources to 
                get parts for any type of vehicle, regardless of make or model.
            </p>
            
        </div>
        <div className={styles.backButton} ><Link href={"/faq"}>Go Back</Link></div>
      </div>

      <div className={styles.questionR}>
            <Message />
      </div>
    </div>
    </>
  )
}

export default question2
