const Express = require("express");
const router = Express.Router();
const Repair = require("../../models/Repair");

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

    res.redirect('http://localhost:3000/repairs').json({ message: "Creado el producto en base de datos" }).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Hubo un problema al crear la reparación en base de datos" }).redirect('http://localhost:3000/repairs');
  }
});

module.exports = router