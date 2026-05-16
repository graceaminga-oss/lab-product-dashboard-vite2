import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={
        product.inStock
          ? styles.card
          : `${styles.card} ${styles.outOfStockProduct}`
      }
    >
      {/* Product name */}
      <h3>{product.name}</h3>

      {/* Product price */}
      <p>Price: ${product.price}</p>

      {/* Stock status */}
      <p>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      {/* Remove button */}
      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  )
}

export default ProductCard