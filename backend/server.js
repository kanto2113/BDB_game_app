const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


// set up express

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})


// set up mongoose

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB connection established successfully")
})


// set up routes

const characterRouter = require('./routes/character-route')
app.use('/character', characterRouter)

// user route is shorthand for character route
app.use('/users', require('./routes/user-route'))