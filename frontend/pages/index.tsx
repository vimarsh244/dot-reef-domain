import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lit Name Service</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Create your own <br />
          .reef domains
        </h1>

        <p className={styles.description}>
          
          mint your own domain now
        </p>
      </main>
    </div>
  );
};

export default Home;