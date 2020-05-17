
const Express = require("express");

const router = Express.Router();
const isAdminRole = require("../middlewares/isAdminRole")


// const isLoggedIn = require("../middlewares/isLoggedIn")

router.get("/", isAdminRole, (req, res) => {

    res.status(200).json({ message: "Bienvenido Administrador"})

})


module.exports = router