import Head from 'next/head'
import Link from 'next/link'

import Message from '@/components/Message'
import styles from '@/styles/Question.module.css'
import Global from '@/styles/Global.module.css'

function question4() {
  return (
    <>
    <Head>
      <title>How much I should expect for my car?</title>
      <meta name="description" content="Our team utilizes the most advanced technologies to calculate a fair offer 
                representing how much your vehicle is. Therefore, we cannot say exactly how
                 much you'll get there unless we hear more details about your vehicle's 
                 type and condition." />
      <meta name="keywords" content="cash for cars sydney, Car Removal Sydney,sell my old car, price, fair offer"></meta>
      <link rel="icon" href="/favicon.ico"/>
      <link rel='canonical' href={'/faq/question4'} />
      
      <mata name="robots" content="index, follow"/>
      <mata name="og:type" content="article"/>
      <mata name="og:description" content="description"/>
    </Head>
    <div className={styles.pageContainer}>
    
      <div className={styles.questionL}>
        <div className={styles.questionContainer}>
            <h1>How much I should expect for my car?</h1>
            <p>
                Our team utilizes the most advanced technologies to calculate a fair offer 
                representing how much your vehicle is. Therefore, we cannot say exactly how
                 much you'll get there unless we hear more details about your vehicle's 
                 type and condition. With this information, we can determine a far more accurate
                  offer for you, so please don't hesitate to reach out and <Link href={'/contact'} className={Global.link}>provide us with your vehicle's information</Link>.
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

export default question4
