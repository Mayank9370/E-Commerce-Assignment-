"use client"

import { useState, useEffect } from "react"

export const CartView = ({ onCheckout }) => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart")
      const data = await response.json()
      setCartItems(data.items)
      setTotal(data.total)
    } catch (err) {
      console.error("Error fetching cart:", err)
    } finally {
      setLoading(false)
    }
  }

  const removeItem = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/cart/${id}`, { method: "DELETE" })
      fetchCart()
    } catch (err) {
      console.error("Error removing item:", err)
    }
  }

  if (loading) return <div className="p-6 text-center">Loading cart...</div>

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between items-center border p-4 rounded">
                <div>
                  <h3 className="font-bold">{item.productId?.name}</h3>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeItem(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 pt-4 mb-6">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span className="text-green-600">${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => onCheckout(cartItems, total)}
            className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}
