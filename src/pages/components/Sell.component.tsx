import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import supabase from '@/lib/supabase'
import { toast } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function Sell() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState<any>();
    const [year, setYear] = useState<any>();
    const [condition, setCondition] = useState<string>("Good")
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        setLoading(true)
        e.preventDefault();
        const reader = new FileReader()
        reader.onloadend = async function () {
            await supabase.from("products").insert({
                name,
                description,
                image: reader.result,
                contact_details: {
                    email
                },
                details: {
                    year,
                    condition,
                    price
                }
            })
            setLoading(false)
            toast.success("Data Saved!")
        }
        reader.readAsDataURL(image)

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

            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
            />

            <label htmlFor="year" className={styles.label}>Year of Buying:</label>
            <input
                type="number"
                max={2023}
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={styles.input}
                required
            />

            <label htmlFor="condition" className={styles.label}>Physical Condition:</label>

            <select name="condition" id="condition" className={styles.condition} onChange={(e) => setCondition(e.target.value)}>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Bad">Bad</option>
            </select>

            <label htmlFor="image" className={styles.label}>Image:</label>
            <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0])}
                className={styles.input}
                required
            />


            <button type="submit" className={styles.button} disabled={loading}>
                {loading ? "Uploading Data" : "Submit Data"}
            </button>
        </form>
    )
}
