const bcrypt = require("bcryptjs");
const Express = require("express");
const router = Express.Router();
const User = require("../../models/User");

router.post("/", async (req, res) => {

  const { name, password, role, email } = req.body;

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

  try {

    const user = new User({ name, password: hashPass, role, email });

    const userDB = await user.save();

    res.status(200).redirect('http://localhost:3000/users');

  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});



module.exports = router