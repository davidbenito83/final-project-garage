const Express = require("express");
const router = Express.Router();
const Product = require("../../models/Product");

router.get("/:userAssoc", async (req, res) => {
  const { userAssoc } = req.params;

  try {
    const productDetailDB = await Product.find({userAssoc})

    res.json( productDetailDB );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router