const Express = require("express");
const router = Express.Router();
const Repair = require("../../models/Repair");

router.post("/:id", async (req, res) => {
  const { id } = req.params;

  const { name, image, description, carRegistration, contactNumber, state, userAssoc, time } = req.body;
  const repairdata = { name, image, description, carRegistration, contactNumber, state, userAssoc, time };

  try {

    const repairDB = await Repair.findByIdAndUpdate(id, repairdata);

    repairDB.save();

    res.status(200).redirect('http://localhost:3000/repairs');
    //res.json({ productDB });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


module.exports = router;
