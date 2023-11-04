const router = require("express").Router()
const PetsController = require("../controllers/pet")

router.get("/", PetsController.searchAllPets)
router.post("/create", PetsController.createPet)

module.exports = router