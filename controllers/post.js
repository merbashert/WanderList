const express = require("express");
const router = express.Router();
const Post = require("../models/post.js");





router.get('/', (req, res) => {
    Post.find({}, (error, foundPost) => {
        res.json(foundPost)
    })
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id, (error, foundPost) => {
        console.log(foundPost);
        res.json(foundPost)
    })
})

router.post('/', (req, res) => {
    Post.create(req.body, (error, createdPost) => {
        console.log(req.body);
        console.log("post route error:", error);
        res.json(createdPost)
    })
});

router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id, (error, deletedPost) => {
        res.json(deletedPost)
    })
});

router.put("/:id", (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedPost) => {
        res.json(updatedPost)
    })
});


module.exports = router;
