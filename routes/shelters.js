const express = require('express');
const router = express.Router();
const ShelterController = require("../controllers/sheltersController")

router.post("/create", ShelterController.createShelter)
router.get("/", ShelterController.getShelters)

module.exports = router