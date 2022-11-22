const express = require('express')
const router = express.Router()
const Place = require('../models/place')

// GET: /employers => fetch all employers as json
router.get('/', (req,res) => {
    Place.find((err, places) => {
        if (err) {
            return res.json(err).status(400)
        }
        else {
            return res.json(places).status(200)
        }
    })
})