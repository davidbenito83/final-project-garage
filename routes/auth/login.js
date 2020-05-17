const Express = require("express");
const bcrypt = require("bcryptjs");

const router = Express.Router();
const User = require("../../models/User");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.render("login", { error: "el usuario no existe" });

    const passwordDB = user.password;

    if (!bcrypt.compareSync(password, passwordDB))
      return res.render("login", { error: "La contraseña no es correcta" });
    
    req.session.currentUser = user;


    //AQUÍ VA EL TOKEN DE LA APLICACIÓN PARA TRAER API

    // const getToken = require("../../carmd-token/getToken");

    // const token = await getToken();

    // console.log("Token de acceso------------->>>>>> "+token);
    

    res.redirect("/cars/all");

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Hubo un problema" });
  }
});

module.exports = router;
