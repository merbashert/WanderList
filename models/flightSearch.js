const mongoose = require("mongoose");

const flightSearchSchema = new mongoose.Schema({
    airline: String,
    quote: Number,
    currency: String,
    directFlight: String,
    outboundAirport: String,
    outboundFlightDate: Number,
    inboundAirport: String,
    inboundFlightDate: String,
    flightQuoteDate: String,


});

const FlightSearches = mongoose.model("FlightSearch", flightSearchSchema);

module.exports = FlightSearches;
