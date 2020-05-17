const Express = require("express");
const bcrypt = require("bcryptjs");

const router = Express.Router();
const User = require("../../models/User");

router.get("/", (req, res) => {
  res.render("signup");
});
router.post("/", async (req, res) => {
  const { email, password, name, role } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) return res.status(409).json({ message: "El usuario ya existe." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Hubo un problema" });
  }

  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);

  const hashPass = bcrypt.hashSync(password, salt);

  const user = new User({
    email,
    password: hashPass,
    role,
    name
  });

  try {
    await user.save();

    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Hubo un problema" });
  }
});

module.exports = router;
