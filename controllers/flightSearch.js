const express = require("express");
const router = express.Router();
const Flights = require("../models/flights.js");

const User = require('../models/users.js')


router.get("/", (req, res) => {
    Flights.find({}, (error, foundFlights) => {
        res.json(foundFlights);
    })
});

router.post("/", (req, res) => {
    Flights.create(req.body, (error, createdFlight) => {
        res.json(createdFlight)
        console.log(req.body);
        console.log(createdFlight);
    })
});

module.exports = router;
