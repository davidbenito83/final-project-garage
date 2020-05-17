const Express = require("express");
const router = Express.Router();
const User = require("../../models/User");

router.post("/:id", async (req, res) => {
  const { id } = req.params;

  const { name, password, role, email } = req.body;
  const userdata = { name, password, role, email };

  try {
    const options = {
      new: true,
      runValidators: true
    };

    const userDB = await User.findByIdAndUpdate(id, userdata, options);

    res.json({ userDB });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


module.exports = router;
