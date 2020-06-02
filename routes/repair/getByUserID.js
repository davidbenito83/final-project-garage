const Express = require("express");
const router = Express.Router();
const Repair = require("../../models/Repair");

router.get("/:userAssoc", async (req, res) => {
  const { userAssoc } = req.params;

  try {
    const repairDetailDB = await Repair.find({userAssoc})

    res.json( repairDetailDB );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router