const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    country: {type:String, required:true},
<<<<<<< HEAD
    currency: {type:Number, required:true},
=======
    currency: {type:String, required:true},
>>>>>>> 3aa311b7cedb0f8d7c93a39cda87370539eb71e6
    locale: {type:String, required:true},
    originPlace: {type:String, required:true},
    destinationPlace:{type:String, required:true},
    outboundPartialDate:{type:String, required:true},
    inboundPartialDate:{type:String, required:true},
<<<<<<< HEAD
=======
    userid: {type:String, required: true}
>>>>>>> 3aa311b7cedb0f8d7c93a39cda87370539eb71e6
});

const Flights = mongoose.model("Flight", flightSchema);

module.exports = Flights;
