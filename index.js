const express = require("express")
const app = express()
app.use(express.json())
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

mongoose.connect(process.env.DB_CONNECT).then((client) => {startApp();});

function startApp() {
    app.listen(4000, () => console.log("Running on 4000!"))
}

const helloWorldRoutes = require("./routes/helloWorld")
app.use("/api", helloWorldRoutes)

const petRoutes = require("./routes/pets")
app.use("/api/pets", petRoutes)