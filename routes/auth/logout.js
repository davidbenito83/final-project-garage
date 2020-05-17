
const Express = require("express");
const bcrypt = require("bcryptjs")

const router = Express.Router();
const User = require("../../models/User");


router.get("/", async (req, res) => {

    req.session.destroy()

    res.redirect("/home");

    // res.status(200).json({ message: "logout" })
})


module.exports = router