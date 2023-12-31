import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Waste Buy/Sell</title>
        <meta name="description" content="Mini Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Buy / Sell e-waste</h1>
        <div className={styles.btnGroup}>
          <Link href="/buy">
            <button className={styles.button}>Buy</button>
          </Link>
          <Link href="/sell">
            <button className={styles.button}>Sell</button>
          </Link>
        </div>
      </main>
    </>
  )
}
