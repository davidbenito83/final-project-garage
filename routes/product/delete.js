
const Express = require("express");
const router = Express.Router();
const Product = require("../../models/Product");


router.delete("/:id", async (req, res) => {

  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndUpdate(id);
    deletedProduct.delete();
    res.json({ data: deletedProduct }).status(200).redirect('http://localhost:3000/products');
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});



module.exports = router