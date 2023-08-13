import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Buy({ title, content, img }: { title: string, content: string, img: string }) {
    return (
        <div className={styles.card}>
            <Image src={img} alt={title} height={200} width={200} className={styles.image}></Image>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
        </div>
    )
}
