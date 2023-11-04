const router = require("express").Router()
const helloWorldController = require("../controllers/helloWorld")

router.get("/", helloWorldController.runMyContract)

module.exports = router