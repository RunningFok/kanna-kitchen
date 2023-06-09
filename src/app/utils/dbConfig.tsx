import mongoose from "mongoose";
import dotenv from "dotenv";
import { Item } from "@/app/models/itemModel";
dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
};

const uri = process.env.MONGODB_URI!;

const connectMongo = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }
    console.log(process.env.MONGODB_URI);

    return mongoose.connect(uri).then(() => console.log("Connected!"));
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectMongo;
