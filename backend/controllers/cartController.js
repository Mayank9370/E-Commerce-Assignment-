import { Cart } from "../models/Cart.js"
import { Product } from "../models/Product.js"

//Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, qty } = req.body

    if (!productId || !qty) {
      return res.status(400).json({ error: "productId and qty are required" })
    }

    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ error: "Product not found" })
    }

    const cartItem = new Cart({
      productId,
      quantity: qty,
      price: product.price,
    })

    await cartItem.save()
    res.json(cartItem)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all cart items with total
export const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("productId")
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    res.json({
      items: cartItems,
      total: Number.parseFloat(total.toFixed(2)),
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

//Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id)
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" })
    }
    res.json({ message: "Item removed from cart" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

//Checkout
export const checkout = async (req, res) => {
  try {
    console.log("✅ Checkout received body:", req.body)

    const { cartItems, name, email } = req.body

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" })
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const receipt = {
      id: Date.now().toString(),
      name,
      email,
      items: cartItems,
      total: Number.parseFloat(total.toFixed(2)),
      timestamp: new Date().toISOString(),
    }

    // Clear cart after checkout
    await Cart.deleteMany({})

    res.json(receipt)
  } catch (error) {
    console.error(" Checkout error:", error)
    res.status(500).json({ error: error.message })
  }
}