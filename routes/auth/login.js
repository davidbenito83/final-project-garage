const Express = require("express");
const bcrypt = require("bcryptjs");

const router = Express.Router();
const User = require("../../models/User");
const config = require("../config")

router.post("/", async (req, res) => {

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.redirect(401, config.buildFrontUrlFor('login'));
    }

    const passwordDB = user.password;

    if (!bcrypt.compareSync(password, passwordDB)) return res.redirect(401, config.buildFrontUrlFor('login'));

    return res.status(301).redirect(config.buildFrontUrlFor('products'));

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Hubo un problema" });
  }
});

module.exports = router;
