const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

//Initialiser "express" dans une variable nommée app
const app = express()

//BodyParser Middleware 
app.use(bodyParser.json())

//Db config
const db = require("./config/keys").mongoURI

//Connect to mongodb
mongoose.connect(db)
    .then(()=> console.log("Mongo connected ..."))
    .catch(err=>console.log(err))

const port = process.env.PORT || 6000

app.listen(port,()=> console.log(`Server started on port ${port}`))