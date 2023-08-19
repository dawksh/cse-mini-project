// pages/ProductPage.js
import React, { useEffect, useState } from "react";
import styles from "@/styles/Product.module.css";
import { useRouter } from "next/router";
import supabase from "@/lib/supabase";
import { toast } from "react-hot-toast";

const ProductPage = () => {
    const router = useRouter();
    const [product, setProduct] = useState<any>(null);
    const { id } = router.query;
    useEffect(() => {
        fetch();
    }, [id]);

    const fetch = async () => {
        if (id) {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .eq("id", id);
            if (error || data.length == 0) {
                toast("Error No Product Found");
            } else {
                setProduct(data?.[0])
            }
        }
    };


    return (
        <div className={styles.productPage}>
            {product ? (
                <>
                    <img
                        src={product.image}
                        alt={product.name}
                        width="400px"
                        height="400px"
                        className={styles.image}
                    />
                    <h2 className={styles.name}>{product.name}</h2>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.details}>
                        Year of Build: {product.details.year} | Condition:{" "}
                        {product.details.condition}
                    </p>
                </>
            ) : (
                "No Data Found"
            )}
        </div>
    );
};

export default ProductPage;
