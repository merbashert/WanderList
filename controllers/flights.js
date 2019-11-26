const express = require("express");
const router = express.Router();
const Flights = require("../models/flights.js");
<<<<<<< HEAD
=======
const User = require('../models/users.js')
>>>>>>> 3aa311b7cedb0f8d7c93a39cda87370539eb71e6

router.get("/", (req, res) => {
    Flights.find({}, (error, foundFlights) => {
        res.json(foundFlights);
    })
});

router.post("/", (req, res) => {
<<<<<<< HEAD
    Flights.create(req.body, (error, createdFlights) => {
=======
    Flights.create(req.body, (error, createdFlight) => {
>>>>>>> 3aa311b7cedb0f8d7c93a39cda87370539eb71e6
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

<<<<<<< HEAD
=======

>>>>>>> 3aa311b7cedb0f8d7c93a39cda87370539eb71e6
module.exports = router;
