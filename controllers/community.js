const express = require("express");
const router = express.Router();
const Community = require("../models/community.js");

router.get("/", (req, res) => {
    Community.find({}, null, {sort: {destination: 1}}(error, foundCommunity) => {
        res.json(foundCommunity);
    })
});

router.post("/", (req, res) => {
    Community.create(req.body, (error, createdCommunity) => {
        res.json(createdCommunity)
    })
});

router.delete("/:id", (req, res) => {
    Community.findByIdAndDelete(req.params.id, (error, deletedCommunity) => {
        res.json(deletedCommunity)
    })
});

router.put("/:id", (req, res) => {
    Community.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedCommunity) => {
        res.json(updatedCommunity)
    })
});


module.exports = router;
