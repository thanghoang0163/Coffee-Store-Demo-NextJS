import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { CoffeeStores } from "../../data/coffee-stores";
import cls from "classnames";

import styles from "./[id].module.css";

export function getStaticProps(staticProps) {
  const params = staticProps.params;

  return {
    props: {
      CoffeeStore: CoffeeStores.find(
        (item) => item.id.toString() === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  const paths = CoffeeStores.map((item) => {
    return { params: { id: item.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function CoffeeStore({ CoffeeStore }) {
  const router = useRouter();

  const { address, id, imgUrl, name, websiteUrl, neighbourhood, star } =
    CoffeeStore;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [upVote, setUpVote] = useState(star);

  const handleUpVote = () => {
    setUpVote((prevState) => prevState + 1);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    Object.assign(CoffeeStore, { star: upVote });
    console.log(star);
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.link}>← Back to home</a>
        </Link>
        <h2 className={styles.name}>{name}</h2>
        <Image
          className={styles.img}
          src={imgUrl}
          alt=""
          width={600}
          height={350}
        />
      </div>
      <div className={cls(styles.content, "glass")}>
        <div className={styles.address}>
          <Image
            className={styles.addressImg}
            src="/static/places.svg"
            alt=""
            width={25}
            height={25}
          />
          <span className={styles.addressText}>{address}</span>
        </div>
        {neighbourhood ? (
          <div className={styles.nearby}>
            <Image
              className={styles.nearbyImg}
              src="/static/nearMe.svg"
              alt=""
              width={25}
              height={25}
            />
            <span className={styles.nearbyText}>{neighbourhood}</span>
          </div>
        ) : (
          ""
        )}
        <div className={styles.star}>
          <Image
            className={styles.starImg}
            src="/static/stars.svg"
            alt=""
            width={25}
            height={25}
          />
          <span className={styles.starText}>{star}</span>
        </div>
        <button className={styles.button} onClick={handleUpVote}>
          Up vote!
        </button>
      </div>
    </div>
  );
}
