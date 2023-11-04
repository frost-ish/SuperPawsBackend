const express = require("express")
const app = express()

app.listen(4000, () => console.log("Running on 4000!"))

const helloWorldRoutes = require("./routes/helloWorld")
app.use("/api", helloWorldRoutes)