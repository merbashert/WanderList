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


// const express = require("express");
// const router = express.Router();
// const Flights = require("../models/flights.js");
//
//
// router.put("/:id", (req, res) => {
//     Flights.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedFlights) => {
//         res.json(updatedFlights)
//     })
// });
//
// router.put("/:id", (req, res) => {
//     Flights.findByIdAndUpdate(
//         {username:req.session.username},
//         {
//             $set: {battery:req.body}
//         },
//
//         (error, foundUser) => {
//             res.json(updatedFlights);
//         });
//     });
//
//
//
// module.exports = router;
