import express from "express"
import {
  addToCart,
  getCart,
  removeFromCart,
  checkout,
} from "../controllers/cartController.js"

const router = express.Router()

router.post("/api/cart", addToCart)
router.get("/api/cart", getCart)
router.delete("/api/cart/:id", removeFromCart)
router.post("/api/checkout", checkout)

export default router