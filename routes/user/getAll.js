const Express = require("express");
const router = Express.Router();
const User = require("../../models/User");
// const isLoggedIn = require("../../middlewares/isLoggedIn")


// router.get("/", isLoggedIn, async (req, res) => {

router.get("/", async (req, res) => {

  try {
    const userDB = await User.find({})
    res.json({ userDB });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router