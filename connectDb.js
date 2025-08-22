import mongoose from "mongoose";

let isConnected = false;

export default async function connectDb() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("db connected successfully");
  } catch (error) {
    throw new Error(error.message);
  }
}
