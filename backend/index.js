import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import productRoutes from "./routes/products.js"
import cartRoutes from "./routes/cart.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use(productRoutes)
app.use(cartRoutes)

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
