const Express = require("express");
const router = Express.Router();
const Product = require("../../models/Product");
const config = require("../config")

router.post("/", async (req, res) => {

  const { name, description, image, quantity, price, sellPrice, state, userAssoc } = req.body;

  try {
    const product = await Product.findOne({ image });

    if (product) return res.status(409).json({ message: "El producto ya existe." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Hubo un problema" });
  }

  const product = new Product({
    name,
    description,
    image,
    quantity,
    price,
    sellPrice,
    state,
    userAssoc
  });

  try {
    await product.save();

    //res.status(200).json({ message: "Creado el producto en base de datos" });
    res.status(200).redirect(config.buildFrontUrlFor('products')).json({ message: "Creado el producto en base de datos" });
  } catch (error) {
    console.log(error);
    res.status(500).redirect(config.buildFrontUrlFor('products')).json({ message: "Hubo un problema al crear el producto en base de datos" });
  }
});

module.exports = router