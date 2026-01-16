import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("DB Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/GREENCART_ECOMMERCE`, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
