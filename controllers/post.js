const express = require("express");
const router = express.Router();
const Post = require("../models/post.js");





router.get('/', (req, res) => {
    Post.find({}, (error, foundPost) => {
        res.json(foundPost)
    })
})


router.post('/', (req, res) => {
    Post.create(req.body, (error, createdPost) => {
        console.log(req.body);
        // console.log("post route error:", error);
        res.json(createdPost)
    })
});

router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id, (error, deletedPost) => {
        res.json(deletedPost)
    })
});

router.put("/:id", (req, res) => {
    Post.findByIdAndUpdate(req.params.id, {$push:{"comments":req.body.comment}}, {new:true}, (error, updatedPost) => {
        // console.log(updatedPost);
        res.json(updatedPost)
    })
});


module.exports = router;
