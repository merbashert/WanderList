const mongoose = require("mongoose");

const flightSearchSchema = new mongoose.Schema({
    // country: {type:String, required:true},
    // currency: {type:String, required:true},
    // locale: {type:String, required:true},
    // originPlace: {type:String, required:true},
    // destinationPlace:{type:String, required:true},
    // outboundPartialDate:{type:String, required:true},
    // inboundPartialDate:{type:String, required:true},
    // userid: {type:String, required: true},

    airline: String,
    quote: Number,
    currency: String,
    directFlight: String,
    outboundAirport: String,
    outboundFlightDate: Number,
    inboundAirport: String,
    inboundFlightDate: String,
    flightQuoteDate: String,
    }

});

const FlightSearches = mongoose.model("FlightSearch", flightSearchSchema);

module.exports = FlightSearches;
