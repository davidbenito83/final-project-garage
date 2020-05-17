
const Express = require("express");
const router = Express.Router();
const User = require("../../models/User");
const isLoggedIn = require("../../middlewares/isLoggedIn")


router.get("/:name", isLoggedIn, async (req, res) => {
  const { name, lastname } = req.params;
  try {
    const userDB = await User.find({ name })
      .skip(4)
      .limit(10);

    const usersCount = await User.count({})
      .skip(4)
      .limit(10);

    res.json({ userDB, usersCount });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

router.get("/users", isLoggedIn, async (req, res) => {

  try {
    const userDB = await User.find({ 'name': req.name })
      .skip(4)
      .limit(10);

    console.log(res.json({ userDB }))
    res.json({ userDB });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router