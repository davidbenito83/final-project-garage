const Express = require("express");
const router = Express.Router();

router.use("/all", require("./allCars.js"));


module.exports = router;
