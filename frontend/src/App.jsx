"use client"

import { useState, useEffect } from "react"
import { ProductGrid } from "./components/ProductGrid"
import { CartView } from "./components/CartView"
import { CheckoutForm } from "./components/CheckoutForm"
import { Receipt } from "./components/Receipt"

export default function App() {
  const [view, setView] = useState("products")
  const [receipt, setReceipt] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  // Fetch cart whenever we enter cart or checkout view
  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cart")
      const data = await res.json()
      setCartItems(data.items || [])
      setTotal(data.total || 0)
    } catch (err) {
      console.error("Error fetching cart:", err)
    }
  }

  useEffect(() => {
    if (view === "cart" || view === "checkout") {
      fetchCart()
    }
  }, [view])

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product._id, qty: 1 }),
      })
      if (response.ok) {
        alert("Item added to cart!")
      }
    } catch (err) {
      console.error("Error adding to cart:", err)
    }
  }

  const handleCheckout = () => {
    setView("checkout")
  }

  const handleReceipt = (receiptData) => {
    setReceipt(receiptData)
    setView("receipt")
  }

  const handleContinueShopping = () => {
    setReceipt(null)
    setView("products")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vibe Commerce</h1>
          <div className="space-x-4">
            <button
              onClick={() => setView("products")}
              className={`px-4 py-2 rounded transition ${
                view === "products" ? "bg-white text-blue-600 font-bold" : "hover:bg-blue-700"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setView("cart")}
              className={`px-4 py-2 rounded transition ${
                view === "cart" ? "bg-white text-blue-600 font-bold" : "hover:bg-blue-700"
              }`}
            >
              Cart
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-8">
        {view === "products" && <ProductGrid onAddToCart={handleAddToCart} />}
        {view === "cart" && <CartView onCheckout={handleCheckout} />}
        {view === "checkout" && (
          <CheckoutForm
            cartItems={cartItems}
            total={total}
            onReceipt={handleReceipt}
            onCancel={() => setView("cart")}
          />
        )}
        {view === "receipt" && receipt && <Receipt receipt={receipt} onClose={handleContinueShopping} />}
      </main>
    </div>
  )
}
