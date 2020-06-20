const Express = require("express");
const router = Express.Router();
const Repair = require("../../models/Repair");
const config = require("../config")

router.post("/", async (req, res) => {

  const { name, description, image, carRegistration, contactNumber, time, state, userAssoc, productsAssoc } = req.body;

  const repair = new Repair({
    name,
    description,
    image,
    carRegistration,
    contactNumber,
    time,
    state,
    userAssoc,
    productsAssoc
  });

  try {
    await repair.save();

    res.redirect(config.buildFrontUrlFor('repairs')).json({ message: "Creado el producto en base de datos" }).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Hubo un problema al crear la reparación en base de datos" }).redirect(config.buildFrontUrlFor('repairs'));
  }
});

module.exports = router