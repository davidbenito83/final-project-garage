
const Express = require("express");
const router = Express.Router();
const Repair = require("../../models/Repair");


router.delete("/:id", async (req, res) => {

  const { id } = req.params;

  try {
    const deletedRepair = await Repair.findByIdAndUpdate(id);
    deletedRepair.delete();
    res.json({ data: deletedRepair }).status(200).redirect('http://localhost:3000/repairs');
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});



module.exports = router