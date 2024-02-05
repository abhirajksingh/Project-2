import express from "express";
import { addproduct, getallproduct } from "../controller/product.js";

const route = express.Router();
route.get("/", getallproduct);
route.post("/add", addproduct);

export default route;
