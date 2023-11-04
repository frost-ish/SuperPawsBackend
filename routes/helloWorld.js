const router = require("express").Router()
const helloWorldController = require("../controllers/helloWorld")

router.get("/", helloWorldController.sayHello)

module.exports = router