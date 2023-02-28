// import of Hooks
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import of pages
import Slide from "@/components/Slide";
import About from "@/pages/about";
import Services from "@/pages/services";
import Message from "@/components/Message";
import Number from "@/components/Number";
import styles from "@/styles/Home.module.css";
import Sharing from "@/styles/Sharing.module.css";

// import of images
import valuePic from "@/public/images/our-value.jpg";
import exportPic from "@/public/images/E-pic.png";
import recyclersPic from "@/public/images/professional.png";

//import of react icons
import { IoLocationSharp } from "react-icons/io5";
import { UilUsdCircle, UilFileAlt, UilBill } from "@iconscout/react-unicons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aux Cash For Cars Sydney & Car Removals</title>
        <meta
          name="description"
          content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars"
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney,sell my old car,"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/"} />

        <mata name="robotes" content="index, follow" />
        <mata name="og:type" content="article" />
        <mata name="og:description" content="description" />
      </Head>

      <Slide />
      {/* how we work start */}
      <section className={styles.howItWorks}>
        <h1>How we work?</h1>

        <div className={styles.option}>
          <div className={styles.icon}>
            <UilUsdCircle className={styles.svg} />
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.p}>
            <h2>Get Price</h2>
            <p>
              The car owner{" "}
              <Link className={Sharing.link} href={"/contact"}>
                contact
              </Link>
              s to{" "}
              <Link className={Sharing.link} href={"/"}>
                our company
              </Link>{" "}
              and provides information about their vehicle, such as its make,
              model, year, mileage, and overall condition.
              <br />
              <Link className={Sharing.link} href={"/"}>
                AUX Cash for Car
              </Link>{" "}
              company evaluates the vehicle and makes an offer to the owner
              based on its estimated value. The offer may be based on factors
              such as the car market demand, condition, and any needed repairs.
            </p>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.icon}>
            <UilFileAlt className={styles.svg} />
            <div className={styles.number}>2</div>
          </div>
          <div className={styles.p}>
            <h2>Sign digital paperwork</h2>
            <p>
              By signing the title, the seller releases ownership of the car.
              Upon signing the title, the buyer takes it to the DMV, which
              issues a valid registration and title. It may be necessary to
              complete additional paperwork, such as a bill of sale or a
              transfer of ownership form, in some states.
            </p>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.icon}>
            <UilBill className={styles.svg} />
            <div className={styles.number}>3</div>
          </div>
          <div className={styles.p}>
            <h2>Get paid & we pick up</h2>
            Cash Payment:{" "}
            <Link className={Sharing.link} href={"/"}>
              Our company
            </Link>{" "}
            will pay you in cash for your vehicle. This is the most
            straightforward payment method and allows you to get your money
            immediately.
          </div>
        </div>

        <Link href={"/contact"}>
          <button className={styles.button}>Contact Now</button>
        </Link>
      </section>
      {/* how we work start */}

      <About />

      {/* our valu start */}
      <section className={styles.our_value_contianer}>
        <div className={styles.our_value_s_l}>
          <div className={styles.image}>
            <Image
              src={valuePic}
              title="Picking up damaged car on a truck"
              alt="a car on a truck ready to pick-up"
              width={1000}
            />
          </div>

          <div className={styles.our_vation_massion}>
            <div className={styles.our_masstion}>
              <h2>Our Mission </h2>
              <p>
                To provide the recycling services in an environmentally friendly
                way
              </p>
            </div>
            <div className={styles.our_vation}>
              <h2>OUR VISION</h2>
              <p>
                To minimize the waste and making the good ways for recycling and
                reusing of them and supporting the community economy through
                that.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.our_value_s_r}>
          <h2>OUR VALUES</h2>

          <p className={styles.values_text}>
            We consider and stand for the five main values that we have chosen
            for our services that will guide the way we work on the projects: -
          </p>

          <p className={styles.values_text}>
            <span>Satisfaction and Compliance:</span>
            We try our best to get the Satisfaction of our customers, clients
            and our employees, so we consider it as one of our values that we
            follow.
          </p>

          <p className={styles.values_text}>
            <span>Our compatriot:</span>
            We value our employees, customers, clients, and suppliers. We are
            consigned to support and contribute to the community.
          </p>

          <p className={styles.values_text}>
            <span>Perfection:</span>
            We strive for industry leadership, best practices and operational
            perfection.
          </p>

          <p className={styles.values_text}>
            <span>Innovation:</span>
            We are continuously working and investing in technologies in order
            to bring development and benefit our stakeholders and society.
          </p>

          <p className={styles.values_text}>
            <span>Sustainability:</span>
            We are consigned to provide and prepare the most sustainable
            recycling solutions to achieve the best possible outcome for the
            future.
          </p>
        </div>
      </section>
      {/* our valu end */}

      <Services className={styles.Services} />

      {/* Export start */}
      <section className={styles.export_container}>
        <div className={styles.export_s_l}>
          <h2>Industrial Scrap Metal Exports</h2>
          <p>
            <span>
              We export high-quality metals both ferrous and non-ferrous to the
              UAE. We have tried to prepare a range of container loaders and
              material handlers that meet the demands and needs of our buyers.
            </span>
            We have a good partnership and cooperation with each other in order
            to save environment and improve and support the econometry of both
            countries.
          </p>

          <p>
            Due to the large amount of demand for the steel inside our own
            country, we also supply a considerable quality of Fragmented steel
            to the local or internal markets. We provide and prepare substantial
            amount of Frag steel across Australian Steel Mills.
          </p>
          <button className={styles.callUs}>
            <a href="tel:0469798540"> Call us now</a>
          </button>
        </div>
        <div className={styles.export_s_r}>
          <Image src={exportPic} alt=" " width={1000} />
        </div>
      </section>
      {/* export end */}

      {/* Recyclers Start ---------------------------------------- */}
      <section className={styles.recyclers_contianer}>
        <div className={styles.recyclers_s_l}>
          <Image src={recyclersPic} alt=" " width={500} />
        </div>
        <div className={styles.recyclers_s_r}>
          <p>SYDNEY PREMIER AUTO WRECKER</p>
          <h2>
            (AUX Cash for Car Sydney) is your Professional and Friendly Scrap
            Metal Recyclers
          </h2>
          <p>
            <span>
              (
              <Link className={Sharing.link} href={"/"}>
                AUX Cash for Car Sydney
              </Link>
              ) is one of the biggest and most active car removals in Sydney,
              Queensland that gives you the good, save, and satisfying service
              and offers you the highest prices and cash for your unwanted cars
              that can go up to $9999.
            </span>
            We collect and recycle all types of scrap metals and car including
            scrap cars, buses, tracks, 4x4s, So, if you have a car or any other
            kind of metal, (
            <Link className={Sharing.link} href={"/"}>
              AUX Cash for Car Sydney
            </Link>
            ) will come and collect your unwanted vehicle for free_ and will
            offer you cash for your unwanted vehicle.
          </p>
        </div>
      </section>
      {/* Recyclers end -------------------------------------------------*/}

      {/* Contact us start -------------------------------------------------*/}
      <section className={styles.contactUsContainer}>
        <h2>Contact us</h2>
        <p>
          <Link className={Sharing.link} href={"/"}>
            AUX Cash for Car
          </Link>{" "}
          is One Of Leading Cash For Scrap Cars, Located In Sydney.
        </p>
        <div className={styles.itemsContainer}>
          <div className={styles.contactItems}>
            <div className={styles.contactAdress}>
              <span>
                <IoLocationSharp />
              </span>
              <div>
                <h2>Sydney</h2>
                <p>Sydney Australia</p>
              </div>
            </div>
            <Number />
          </div>

          <div className={styles.massage}>
            <Message />
          </div>
        </div>
      </section>
      {/* Contact us end -------------------------------------------------*/}
    </>
  );
}
