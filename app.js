// dependencies
// web server
const express = require('express')

// to process form submissions
const bodyParser = require('body-parser')

// for db connection
const mongoose = require('mongoose')

// create and configure the web app so all the requests use JSON
const app = express()
app.use(bodyParser.json())

if (process.env.NODE_ENV !== 'prodution') {
    require('dotenv').config()
}

// db
mongoose.connect(process.env.DATABASE_URL, {   
}).then((res) => {
    console.log('Connected')
}).catch((err) => {
    console.log(`Cannot connect: ${err}`)
})

// point url paths to the right controllers
const places = require('./controllers/places')
app.use('/api/places', places)

// start the server
app.listen(3000)
 module.exports = app