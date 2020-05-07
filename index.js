require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const mailRoutes = require("./routes/mailRoutes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", mailRoutes)

app.listen(4000, () => {
   console.log("Server up on 4000")
})
