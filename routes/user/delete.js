
const Express = require("express");
const router = Express.Router();
const User = require("../../models/User");
const config = require("../config")

router.delete("/:id", async (req, res) => {

  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndUpdate(id);
    deletedUser.delete();
    res.json({ data: deletedUser }).status(200).redirect(config.buildFrontUrlFor('users'));
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});



module.exports = router