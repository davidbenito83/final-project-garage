const express = require("express");
const router = express.Router();
const axios = require("axios");
// const isLoggedIn = require("../../middlewares/isLoggedIn")

// router.get("/", isLoggedIn, async (req, res) => {
router.get("/", async (req, res) => {
  try{
    const url = "https://api.coingecko.com/api/v3/coins/list";
    const response = await axios.get(url);
    console.log(response.data);

    res.status(200).json({ data: response.data });
  }catch(error){
    res.status(500).json({ message: error });
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

    res.status(200).json({ data: response.data });

  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
});

module.exports = router;
