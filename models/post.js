const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    destination: {type: String},
    departure: {type: String},
    return: {type: String},
    cost: {type:Number},
    description: {type: String},
    username: {type: String}
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
