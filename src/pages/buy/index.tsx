import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Buy from '../components/Buy.card'
import { useEffect, useState } from 'react'
import supabase from '@/lib/supabase'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [data, setData] = useState<any>();
    const [open, setOpen] = useState<Boolean>(false)
    const fetchData = async () => {
        const { data: buyData, error } = await supabase.from("products").select("*").limit(10)
        if (!error && buyData.length != 0) {
            setData(buyData)
        }
        console.log(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Head>
                <title>Buy E-Waste</title>
                <meta name="description" content="Mini Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <h1>Buy E-Waste</h1>
                {/* TODO: Add a component in loop fetching data from db to buy data */}
                <div className={styles.layout}>
                    {data && data.map((el: any) => {
                        return (
                            <Link href={`/buy/${el.id}`}>
                                <Buy key={el.id} title={el.name} content={el.description} img={el.image} price={el.details.price} />
                            </Link>
                        )
                    })}
                </div>
            </main>
        </>
    )
}
