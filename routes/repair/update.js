const Express = require("express");
const router = Express.Router();
const Repair = require("../../models/Repair");
const config = require("../config")

router.post("/:id", async (req, res) => {

  const { id } = req.params;

  const { name, image, description, carRegistration, contactNumber, state, userAssoc, productsAssoc, time } = req.body;
  const repairdata = { name, image, description, carRegistration, contactNumber, state, userAssoc, productsAssoc, time };

  try {

    const repairDB = await Repair.findByIdAndUpdate(id, repairdata);

    repairDB.save();

    res.json({ repairDB }).res.status(200).redirect(config.buildFrontUrlFor('repairs'));

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


module.exports = router;
