import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import Card from "../components/card";
import { useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/coffee-stores");
  const CoffeeStores = await res.json();

  return {
    props: {
      CoffeeStores,
    },
  };
}

export default function Home({ CoffeeStores }) {
  const handleOnBannerBtnClick = () => {
    console.log("first");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS App Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View Stores Nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.cardLayout}>
          {CoffeeStores.data.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.attributes.name}
                imgUrl={item.attributes.imgUrl}
                href={`/coffee-store/${item.id}`}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
