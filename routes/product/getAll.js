
const Express = require("express");
const router = Express.Router();
const Product = require("../../models/Product");
// const isLoggedIn = require("../../middlewares/isLoggedIn")


// router.get("/", isLoggedIn, async (req, res) => {

router.get("/", async (req, res) => {

  try {
    const productDB = await Product.find({})
    res.json({ productDB });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router