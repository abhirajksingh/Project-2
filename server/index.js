import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import productRoute from "./routes/product.js";
import databaseConnection from "./connection/databaseConnection.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

databaseConnection();

app.use("/", productRoute);

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
