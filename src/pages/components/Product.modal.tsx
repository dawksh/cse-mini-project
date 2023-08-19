// components/ProductModal.js
import React from 'react';
import styles from '@/styles/Home.module.css';

const ProductModal = ({ isOpen, closeModal, product }: any) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={closeModal}>
                    &times;
                </button>
                <div className={styles.content}>
                    <img src={product.image} alt={product.name} className={styles.image} />
                    <h2 className={styles.name}>{product.name}</h2>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.details}>
                        Year of Build: {product.yearOfBuild} | Condition: {product.condition}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
