const Express = require("express");
const router = Express.Router();
const Product = require("../../models/Product");

router.get("/", async (req, res) => {

  try {
    const productDB = await Product.find({})

    res.json({ productDB });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router