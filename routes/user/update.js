const Express = require("express");
const router = Express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

router.post("/:id", async (req, res) => {

  const { id } = req.params;

  const { name, password, role, email } = req.body;

  const saltRounds = 10;

  const salt = bcrypt.genSaltSync(saltRounds);

  const hashPass = bcrypt.hashSync(password, salt);

  const userdata = { name, password: hashPass, role, email };

  try {

    const userDB = await User.findByIdAndUpdate(id, userdata);

    userDB.save();

    res.json({data:userDB}).status(200).redirect('http://localhost:3000/users');

  } catch (error) {

    console.log(error);
    res.status(400).json(error);
  }
});


module.exports = router;