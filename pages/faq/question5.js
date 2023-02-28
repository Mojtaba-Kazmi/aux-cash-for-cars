import Head from 'next/head'
import Link from 'next/link'

import Message from '@/components/Message'
import styles from '@/styles/Question.module.css'
import Sharing from '@/styles/Sharing.module.css'

function question5() {
  return (
    <>
    <Head>
      <title>Will you buy my car if it doesn’t have title?</title>
      <meta name="description" content="Of course, we do! We will also have to walk through the process of transferring ownership properly" />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, ownership, car title, paperwork"></meta>
      <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/faq/question5'} />
      
      <mata name="robots" content="index, follow"/>
      <mata name="og:type" content="article"/>
      <mata name="og:description" content="description"/>
    </Head>
    <div className={styles.pageContainer}>
    
      <div className={styles.questionL}>
        <div className={styles.questionContainer}>
            <h1>Will you buy my car if it doesn’t have title?</h1>
            <p>
              Of course, we do! The situation of not having a vehicle title can occur in 
              many ways. It might be destroyed for whatever reason. In any case, we will 
              ask you for additional paperwork to prove ownership even if we accept every 
              vehicle without a title.
            </p>
            <p>
              <Link href={'/'} className={Sharing.link}>Our company</Link> will take care of all the paperwork if you decide to sell your 
              car without a title. We will also have to walk through the <Link href={'/HowItWorks'} className={Sharing.link}>process</Link> of 
              transferring ownership properly. You will therefore receive a lower final 
              offer than if someone else tried to sell the vehicle with a title.
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

export default question5
