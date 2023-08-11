import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Sell() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState<any>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // You can add your form submission logic here
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                required
            />

            <label htmlFor="description" className={styles.label}>Description:</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textarea}
                required
            />

            <label htmlFor="price" className={styles.label}>Price:</label>
            <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={styles.input}
                required
            />

            <label htmlFor="image" className={styles.label}>Image:</label>
            <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0])}
                className={styles.input}
                required
            />

            <button type="submit" className={styles.button}>
                Submit
            </button>
        </form>
    )
}
