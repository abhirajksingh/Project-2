import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBURL = process.env.DBURL;

const dbConnection = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

export default dbConnection;
