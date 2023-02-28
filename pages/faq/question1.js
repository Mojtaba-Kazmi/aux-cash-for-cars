import Head from 'next/head'
import Link from 'next/link'

import Message from '@/components/Message'
import styles from '@/styles/Question.module.css'
import Global from '@/styles/Global.module.css'

function question1() {
  const content = 'Trusted Seller, Providing cash payments, No worries about your vehicle’s condition, sell your car to a trusted car buyer today! ';
  return (
    <>
    <Head>
      <title>Why should I choose AUX Cash for Car?</title>
      <meta name="description" content={content} />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, cash payment, vehicle’s condition, sell today" />
      <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/faq/question1'} />
      
      <mata name="robots" content="index, follow"/>
    </Head>
    <div className={styles.pageContainer}>
    
      <div className={styles.questionL}>
        <div className={styles.questionContainer}>
            <h1>Why should I choose AUX Cash for Car?</h1>
            <p>The following are some reasons why you should choose <Link className={Global.link} href={'/about'}>AUX Cash for Car</Link>. </p>
            <p>
              <b>Trusted sellers: </b>
              We’ve been in the used car market for decades now. We have one of the most impressive
               reputations among our competitors, and you can see this through our customer reviews. 
               So you don’t have to worry about any concerns dealing with strangers like what you’ll 
               deal with when selling your vehicle or posting it through classified websites.
              All our car removal specialists are background checked and willing to meet with you 
              at any location that makes you as comfortable as possible. We can meet in a public 
              parking lot or any other location.
            </p>
            <p>
              <b>Providing cash payments: </b>
              One of the most valuable things you will get when selling your car to <Link className={Global.link} href={'/'}>AUX Cash for Car </Link>
              is receiving cash payments. Our team understands all the hassle you could run through 
              when selling your vehicle to strangers who ask you to pay through third-party accounts 
              that might belong to them.
              Therefore, we have decided to provide all customers with cash payments, which is 
              considered the safest payment method for purchasing used cars.
            </p>
            <p>
              <b>No worries about your vehicle’s condition: </b>
              Have you tried selling a damaged car on classified websites? No one will be interested 
              in buying it! However, by choosing <Link className={Global.link} href={'/'}>AUX Cash for Car</Link>, there is no problem as we accept 
              your vehicle no matter what type or condition.
              We see value in every car.
            </p>
            <p>
              <b>Don’t delay; sell your car to a trusted car buyer today!: </b>
              Are you ready to get rid of your car today? Why don’t you reach out to <Link className={Global.link} href={'/'}>AUX Cash for Car</Link> and  
              check out your instant offer? It is free and fast! Give it a try!
              We compare your car to the most recent transactions in your area. We decide on how much 
              you'll get depending on the vehicle's type, condition, and whether you have a title or not.
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

export default question1
