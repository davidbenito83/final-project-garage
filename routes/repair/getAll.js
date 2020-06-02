const Express = require("express");
const router = Express.Router();
const Repair = require("../../models/Repair");

router.get("/", async (req, res) => {

  try {
    const repairDB = await Repair.find({})

    res.json({ repairDB });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router