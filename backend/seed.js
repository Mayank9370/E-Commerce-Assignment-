import mongoose from "mongoose"
import { Product } from "./models/Product.js"
import dotenv from "dotenv"

dotenv.config()

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    await Product.deleteMany({})

    const mockProducts = [
      {
        name: "Wireless Headphones",
        price: 79.99,
        description: "High-quality sound with noise cancellation",
        image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      },
      {
        name: "Smart Watch",
        price: 199.99,
        description: "Track fitness and receive notifications",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
      },
      {
        name: "USB-C Cable",
        price: 12.99,
        description: "Fast charging and data transfer",
        image: "https://images.unsplash.com/photo-1639675960002-2f414c58ed79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VVNCJTIwY2FibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      },
      {
        name: "Portable Charger",
        price: 34.99,
        description: "20000mAh capacity with multiple ports",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      },
      {
        name: "Phone Stand",
        price: 19.99,
        description: "Adjustable aluminum stand",
        image: "https://images.unsplash.com/photo-1617975426095-f073792aef15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGhvbmUlMjBzdGFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      },
      {
        name: "Screen Protector",
        price: 9.99,
        description: "Tempered glass for all phone sizes",
        image: "https://media.istockphoto.com/id/1278797308/photo/man-cleaning-the-phone-display-before-applying-scratch-resistant-protective-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=lT4K_vmo_xh4VrZ5_qwRWeGpUdEikpcSF2KtQQCX4mc=",
      },
      {
        name: "Phone Case",
        price: 24.99,
        description: "Durable protective case",
        image: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjYXNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      },
      {
        name: "Wireless Mouse",
        price: 29.99,
        description: "Ergonomic design with long battery life",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167",
      },
    ]

    await Product.insertMany(mockProducts)
    console.log("Products seeded successfully")
    process.exit(0)
  } catch (error) {
    console.error("Error seeding products:", error)
    process.exit(1)
  }
}

seedProducts()