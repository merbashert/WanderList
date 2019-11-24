const mongoose = require("mongoose");

const searchFlightSchema = new mongoose.Schema({
    userOutboundAir: {type:String, required:true},
    userInboudAir: {type:String, required:true},
    userOutboundDate: {type:String, required:true},
    userInboundDate: {type:String, required:true},
});

const Flights = mongoose.model("Flight", flightSchema);

module.exports = Flights;
