const Express = require("express");
const router = Express.Router();

router.use("/new", require("./new.js"))
router.use("/update", require("./update"))
router.use("/delete", require("./delete.js"))
router.use("/finish", require("./finish.js"))
router.use("/getbyuser", require("./getByUserID.js"))
router.use("/getall", require("./getAll.js"))

module.exports = router