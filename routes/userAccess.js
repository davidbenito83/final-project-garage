
const Express = require("express");
const bcrypt = require("bcryptjs")

const router = Express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn")

router.use(( req, res, next )=>{

    if (req.session.currentUser) next()
    
    else res.status(401).json({ message: "Unauthorized"})

})


router.get("/", isLoggedIn, (req, res) => {

    res.status(200).json({ message: "Bienvenido usuario"})

})


module.exports = router