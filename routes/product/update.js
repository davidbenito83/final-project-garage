const Express = require("express");
const router = Express.Router();
const Product = require("../../models/Product");
const config = require("../config")

router.post("/:id", async (req, res) => {

  const { id } = req.params;

  const { name, image, description, state, userAssoc, quantity, price, sellPrice } = req.body;
  const productdata = { name, image, description, state, userAssoc, quantity, price, sellPrice };

  try {

    const productDB = await Product.findByIdAndUpdate(id, productdata);

    productDB.save();

    res.json({data:productDB}).status(200).redirect(config.buildFrontUrlFor('products'));

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


module.exports = router;
