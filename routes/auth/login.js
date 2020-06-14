const Express = require("express");
const bcrypt = require("bcryptjs");

const router = Express.Router();
const User = require("../../models/User");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(200).json({ error: "el usuario no existe" });

    const passwordDB = user.password;

    if (!bcrypt.compareSync(password, passwordDB))
      return res.status(200).json({ error: "La contraseña no es correcta" });

      return res.status(200).redirect('http://localhost:3000/dashboard');

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Hubo un problema" });
  }
});

module.exports = router;
