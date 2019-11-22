const mongoose = require('mongoose');
const CommunitySchema = new mongoose.Schema({
    destination: {type: String, required: true},
    depature: {type: String, required: true},
    return: {type: String, required: true},
    cost: Number,
    username: {type: String},
})

const Community = mongoose.model('Post', userSchema);

module.exports = Community;
