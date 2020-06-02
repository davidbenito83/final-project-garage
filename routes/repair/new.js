const Express = require("express");
const router = Express.Router();
const Repair = require("../../models/Repair");

router.post("/", async (req, res) => {
  const { name, description, image, time, state, userAssoc } = req.body;

  const repair = new Repair({
    name,
    description,
    image,
    time,
    state,
    userAssoc
  });

  try {
    await repair.save();

    //res.status(200).json({ message: "Creado el producto en base de datos" });
    res.status(200).redirect('http://localhost:3000/repairs');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Hubo un problema al crear la reparación en base de datos" });
  }
});

module.exports = router