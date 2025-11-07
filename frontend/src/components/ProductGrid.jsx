"use client"

import { useState, useEffect } from "react"

export const ProductGrid = ({ onAddToCart }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products")
        if (!response.ok) throw new Error("Failed to fetch products")
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div className="text-center py-8">Loading products...</div>
  if (error) return <div className="text-red-500 py-8">Error: {error}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</span>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
