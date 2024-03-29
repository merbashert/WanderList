const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    country: {type:String, required:true},
    currency: {type:String, required:true},
    locale: {type:String, required:true},
    originPlace: {type:String, required:true},
    destinationPlace:{type:String, required:true},
    outboundPartialDate:{type:String, required:true},
    inboundPartialDate:{type:String, required:true},
    userid: {type:String, required: true}

    // flight:{
    //     airline: String,
    //     cost: Number,
    //     departureAirport: String,
    //     departureDate: Number,
    // }

});

const Flights = mongoose.model("Flight", flightSchema);

module.exports = Flights;
