import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Message from "@/components/Message";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

import postImage1 from "@/public/images/broken-down-cars.jpg";
import postImage2 from "@/public/images/car.jpg";
import postImage3 from "@/public/images/cars.jpg";
import postImage4 from "@/public/images/old-car.jpg";
import postImage5 from "@/public/images/lifespan-of-a-car.jpg";
import postImage6 from "@/public/images/flood-damaged-car.jpg";

import styles from "@/styles/Blog.module.css";
import Sharing from "@/styles/Sharing.module.css";
import Head from "next/head";

function Blog() {
  const [nextSlide, setNextSlide] = useState("0%");

  function sliderRight() {
    if (nextSlide == "0%") {
      setNextSlide("-107%");
    } else if (nextSlide == "-107%") setNextSlide("0%");
  }

  function sliderLeft() {
    if (nextSlide == "0%") {
      setNextSlide("-107%");
    } else if (nextSlide == "-107%") {
      setNextSlide("0%");
    }
  }

  return (
    <>
      <Head>
        <title>Blogs - Aux Cash For Cars</title>
        <meta
          name="description"
          content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars"
        />
        <meta
          name="keywords"
          content="cash for cars sydney, Car Removal Sydney, Junk Car Removal Near Me, payment, fast pick up, Car's Condition, laws"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={"/blog"} />

        <mata name="robots" content="index, follow" />
        <meta property="og:image" content={postImage1} />
        <meta property="og:title" content="Blogs - Aux Cash For Cars" />
        <meta
          property="og:description"
          content="Sell your car now for cash or a bank cheque. Aux Cash For Car & Aux Car Removals Pays The Highest Cash For Cars In Sydney, we Pay the top amount  for your old, unwanted, scrap, or unroadworthy cars"
        />
      </Head>
      <div className={styles.blog}>
        <h1>Blogs</h1>

        <div className={styles.blogContainer}>
          <div className={styles.blogsContainer}>
            <div
              className={styles.pagewraper}
              style={{ marginLeft: nextSlide }}
            >
              {/* last page */}
              <section className={styles.lastPage}>
                {/* post 12 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage1}
                    title="Picking up damaged car"
                    alt="junk car removal services"
                  />
                  <Link href={"/blog/post12"}>
                    <h3 className={styles.title}>
                      The Benefits of Using a Professional Junk Car Removal
                      Service Near You
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    There are many reasons why you might want to get rid of an
                    old car. It may be that it is reached the end of its life
                    and is starting to break down, or it could be that it is
                    been
                    <Link href={"/blog/post12"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                {/* post 11 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage1}
                    title="Picking up damaged car"
                    alt="cars in bad damaged condition"
                  />
                  <Link href={"/blog/post11"}>
                    <h3 className={styles.title}>
                      The Effect of the Car Condition on the Price
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    Regarding buying a car, the condition of the vehicle is one
                    of the most important factors that can affect the price.
                    Whether you are looking to buy a new or
                    <Link href={"/blog/post11"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                {/* post 10 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage1}
                    title="Picking up damaged car"
                    alt="selling junk cars laws"
                  />
                  <Link href={"/blog/post10"}>
                    <h3 className={styles.title}>
                      Selling Junk Cars: Laws to Know
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    When you have finally come to the decision that it is time
                    to sell your junk car, it is essential to be aware of the
                    laws and regulations that govern the process. This will help
                    ensure
                    <Link href={"/blog/post10"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                {/* post 9 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage3}
                    title="Picking up damaged car"
                    alt="cash for old car"
                  />
                  <Link href={"/blog/post9"}>
                    <h3 className={styles.title}>
                      Junk Car Removal Near Me: Get Top Dollar for Your Old Car
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    If you have an old car that you are trying to get rid of,
                    you may be wondering about the best way to go about it. You
                    could try to sell it, but depending on
                    <Link href={"/blog/post9"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                {/* post 8 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage2}
                    title="Picking up damaged car"
                    alt="receiving payment for damaged cars"
                  />
                  <Link href={"/blog/post8"}>
                    <h3 className={styles.title}>
                      Selling a car? How to Receive Payment Safely?
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    Selling your car can be a quick and easy way to get some
                    extra money. However, if you are not careful, you could end
                    up getting scammed. In this article, we will go over how to
                    receive
                    <Link href={"/blog/post8"}> Read More</Link>
                  </p>
                  <p className={styles.date}>17 Feb 2023</p>
                </section>

                {/* post7 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage1}
                    title="Picking up damaged car"
                    alt="selling damaged cars"
                  />
                  <Link href={"/blog/post7"}>
                    <h3 className={styles.title}>
                      Selling Your Car to a Relative
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    If you are looking for a way to get rid of your old car,
                    then you might want to consider selling it to your
                    relatives. Just make sure you do not end up getting
                    <Link href={"/blog/post7"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                <p>Page 1</p>
              </section>

              {/* page 2 */}
              <section className={styles.pages}>
                {/* post 6 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage6}
                    title="Picking up damaged car"
                    alt="sell flood-damaged cars legally"
                  />
                  <Link href={"/blog/post6"}>
                    <h3 className={styles.title}>
                      Can I sell a flood-damaged car legally?
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    (
                    <Link className={Sharing.link} href={"/"}>
                      AUX Cash for Car Sydney
                    </Link>
                    ) is one of the biggest and most active car removal across
                    Sydney NWS. Don’t be worried, (
                    <Link className={Sharing.link} href={"/"}>
                      AUX Cash for Car Sydney
                    </Link>
                    ) has made it easy for you to be rid of your old car to get
                    a good amount of
                    <Link href={"/blog/post6"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                {/* post 5 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage5}
                    title="Picking up damaged car"
                    alt="life span of a car"
                  />
                  <Link href={"/blog/post5"}>
                    <h3 className={styles.title}>
                      What is the Average Lifespan of a Car?
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    The answer to this question depends on a number of factors,
                    including the make and model of the vehicle, how well it is
                    maintained, and the driving habits of the owner. In general,
                    however, most cars
                    <Link href={"/blog/post5"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                {/* post 4 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage4}
                    title="Picking up damaged car"
                    alt="finding a reliable byer"
                  />
                  <Link href={"/blog/post4"}>
                    <h3 className={styles.title}>
                      Where to Sell My Car for Cash Near Me: Tips for Finding a
                      Reliable Buyer
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    It is finally time. You have been thinking about it for
                    weeks, maybe even months. You are ready to get rid of your
                    old car and move on to something new. But, you are probably
                    wondering, how can I sell my
                    <Link href={"/blog/post4"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                {/* post 3 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage3}
                    title="Picking up damaged car"
                    alt="value of used car"
                  />
                  <Link href={"/blog/post3"}>
                    <h3 className={styles.title}>
                      The Value of a Used Car: A Guide to Finding Out How Much
                      It Is
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    Asking how much a used car is worth is a tricky question.
                    There are a number of factors that can influence the value
                    of a used car, from its make and model to its age and
                    mileage.
                    <Link href={"/blog/post3"}> Read More</Link>
                  </p>
                  <p className={styles.date}>14 Feb 2023</p>
                </section>

                {/* post 2 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage2}
                    title="Picking up damaged car"
                    alt="replace your old car"
                  />
                  <Link href={"/blog/post2"}>
                    <h3 className={styles.title}>
                      Cars to Get Rid of: Signs you need a replacement one
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    Getting rid of old cars clutters up your garage or yard.
                    Also, lead-acid batteries and lubricating oils in old cars
                    pose a health risk. Used vehicles may also have
                    <Link href={"/blog/post2"}> Read More</Link>
                  </p>
                  <p className={styles.date}>17 Feb 2023</p>
                </section>

                {/* post1 */}
                <section className={styles.post}>
                  <Image
                    width={380}
                    height={300}
                    src={postImage1}
                    title="Picking up damaged car"
                    alt="who buys broken-down cars"
                  />
                  <Link href={"/blog/post1"}>
                    <h3 className={styles.title}>
                      Who Buys the broken-down-cars in Sydney?
                    </h3>
                  </Link>
                  <p className={styles.text}>
                    Want to get rid of your current old vehicle? Wondering who
                    buys used cars in any condition, or how you can exchange
                    your vehicle for cash? You can sell your broken down car to
                    us for good cash.
                    <Link href={"/blog/post1"}> Read More</Link>
                  </p>

                  <p className={styles.date}>14 Feb 2023</p>
                </section>
                <p>Page 2</p>
              </section>
            </div>
            <div className={styles.buttons}>
              <p className={styles.backBtn} onClick={sliderRight}>
                <MdNavigateBefore />
              </p>
              <p className={styles.nextBtn} onClick={sliderLeft}>
                <MdNavigateNext />
              </p>
            </div>
          </div>

          <div className={styles.article}>
            <Message />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
