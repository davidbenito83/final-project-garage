const Express = require("express");
const router = Express.Router();
const Product = require("../../models/Product");

router.get("/:productsAssoc", async (req, res) => {
  const { productsAssoc } = req.params;

  try {
    const productDetailDB = await Product.find({productsAssoc})

    res.json( productDetailDB );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router