const express = require("express");
const router = express.Router();
const FlightSearches = require("../models/flightSearch.js");

const User = require('../models/users.js')


router.get("/", (req, res) => {
    FlightSearches.find({}, (error, foundFlights) => {
        res.json(foundFlights);
    })
});

router.post("/", (req, res) => {
    FlightSearches.create(req.body, (error, createdFlight) => {
        res.json(createdFlight)
        console.log(req.body);
        console.log(createdFlight);
    })
});

module.exports = router;
