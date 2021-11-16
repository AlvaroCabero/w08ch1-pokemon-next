import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>POKEMON NEXT</title>
        <meta name="description" content="Pokemones next" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome (again) to Pokemon World!</h1>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <Image
            src="/favicon.webp"
            alt="Pokeman Logo"
            width={100}
            height={100}
          />
        </span>
      </footer>
    </div>
  );
}
