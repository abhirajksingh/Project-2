import Product from "../model/product.js";

export const getallproduct = async (req, res) => {
  try {
    const productData = await Product.find();
    if (!productData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const addproduct = async (req, res) => {
  try {
    const productData = new Product(req.body);
    if (!productData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await productData.save();
    return res.status(200).json({ msg: "Product added Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
