const express = require('express');
const router = express.Router();
const BreedController = require("../controllers/breedController")

router.get("/", BreedController.getAllBreeds)
router.post("/", BreedController.createBreed)

module.exports = router