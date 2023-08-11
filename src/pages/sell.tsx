import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Buy E-Waste</title>
                <meta name="description" content="Mini Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <h1>Sell E-Waste</h1>
                {/* TODO: Add a component in loop fetching data from db to buy data */}
            </main>
        </>
    )
}