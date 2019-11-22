const express = require("express");
const router = express.Router();
const Community = require("../models/community.js");

router.get("/", (req, res) => {
    if(req.session.username) {
        Community.find({}, null, {sort: {destination: 1}}(error, foundCommunity) => {
            res.json(foundCommunity);
        })
    }

});

router.post("/", (req, res) => {
    Community.create(req.body, (error, createdFlight) => {
        res.json(createdFlight)
    })
});

router.delete("/:id", (req, res) => {
    Community.findByIdAndDelete(req.params.id, (error, deletedFlight) => {
        res.json(deletedFlight)
    })
});

router.put("/:id", (req, res) => {
    Community.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedFlight) => {
        res.json(updatedFlight)
    })
});


module.exports = router;
