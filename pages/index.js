import { Button } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Үйлдлийн систем</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Үйлдлийн систем</h1>
        <section style={{ marginTop: 20 }}>
          <Button onClick={() => router.push("/lab5")}>Лаб 5</Button>
        </section>
      </main>
    </div>
  );
}
