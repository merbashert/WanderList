const express = require("express");
const router = express.Router();
const Flights = require("../models/flights.js");

router.get("/", (req, res) => {
    Flights.find({}, (error, foundFlights) => {
        res.json(foundFlights);
    })
});

router.post("/", (req, res) => {
    Flights.create(req.body, (error, createdFlight) => {
        res.json(createdFlight)
    })
});

router.delete("/:id", (req, res) => {
    Flights.findByIdAndDelete(req.params.id, (error, deletedFlight) => {
        res.json(deletedFlight)
    })
});

router.put("/:id", (req, res) => {
    Flights.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedFlight) => {
        res.json(updatedFlight)
    })
});


module.exports = router;
