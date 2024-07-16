import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("connected to DB");
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
