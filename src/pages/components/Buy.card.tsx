import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Buy({ title, content, img, price }: { title: string, content: string, img: string, price: string }) {
    return (
        <div className={styles.card}>
            <Image src={img} alt={title} height={200} width={200} className={styles.image}></Image>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
            <div className={styles.priceContainer}>
                <span className={styles.price}>Price: {price}</span>
            </div>
        </div>
    )
}
