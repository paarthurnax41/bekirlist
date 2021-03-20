import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title> Bekir List | Home</title>
        <meta name="keywords" content="bekirs"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero
          fugiat recusandae error. Fugiat laborum, totam dolor maiores numquam
          amet quia rerum, unde, qui alias voluptates perspiciatis nisi est
          quod! Assumenda perspiciatis nam, nesciunt natus omnis nemo dolorum
          consectetur ex vitae fuga? Praesentium fugit velit similique labore
          unde eligendi aspernatur.
        </p>
        <Link href="/bekirs">
          <a className={styles.btn}> See Bekir Listing</a>
        </Link>
      </div>
    </>
  );
}
