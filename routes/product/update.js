const Express = require("express");
const router = Express.Router();
const Product = require("../../models/Product");

router.post("/:id", async (req, res) => {
  const { id } = req.params;

  const { name, image, description, state, userAssoc, quantity } = req.body;
  const productdata = { name, image, description, state, userAssoc, quantity };

  try {

    const productDB = await Product.findByIdAndUpdate(id, productdata);

    productDB.save();

    res.status(200).redirect('http://localhost:3000/products');
    //res.json({ productDB });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


module.exports = router;
