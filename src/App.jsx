import React, { useState } from 'react'
import ProductList from './components/ProductList'

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: 999,
      inStock: true,
    },
    {
      id: 2,
      name: 'Phone',
      price: 699,
      inStock: false,
    },
    {
      id: 3,
      name: 'Tablet',
      price: 499,
      inStock: true,
    },
  ])

  const [filter, setFilter] = useState('all')

  // REMOVE FUNCTION
  const removeProduct = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    )
  }

  // filter logic
  const filteredProducts = products.filter((product) => {
    if (filter === 'available') return product.inStock
    if (filter === 'unavailable') return !product.inStock
    return true
  })

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* Filter buttons */}
      <div>
        <button onClick={() => setFilter('all')}>
          All
        </button>
        <button onClick={() => setFilter('available')}>
          Available
        </button>
        <button onClick={() => setFilter('unavailable')}>
          Unavailable
        </button>
      </div>

      {/* Pass BOTH props to ProductList */}
      <ProductList
        products={filteredProducts}
        onRemove={removeProduct}
      />
    </div>
  )
}

export default App