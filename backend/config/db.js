import mongoose from "mongoose"

let isConnected = false

export const connectDB = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB")
    return
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    isConnected = true
    console.log(`MongoDB Connected: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`)
    process.exit(1)
  }
}
