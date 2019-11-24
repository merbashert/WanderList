const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const http = require('http').Server(app);
const io = require('socket.io')(http);


const db = mongoose.connection
require('dotenv').config()


///////////////////////

/////Port//////
const PORT = process.env.PORT

///////////////////////

/////Database//////
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true
});
console.log("line22");
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));

db.on('connected', () => console.log('mongo connected: '));

db.on('disconnected', () => console.log('mongo disconnected'));

///////////////////////

app.use(express.json())
app.use(express.static('public'));
app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized:false
}))

////////////////////////
//Reroute to controllers
///////////////////////

const flightsController = require('./controllers/flights.js')
app.use('/flights', flightsController)

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionController = require('./controllers/session.js');
app.use('/session', sessionController);

const searchFlightsController = require("./controllers/searchFlights.js");
app.use("/searchFlights", searchFlightsController)


// app.get('/flights', (req, res) => {
//     res.send("Hello World")
// })


app.get('/community', function(req, res){
  res.sendFile(__dirname + "/public/communityIndex.html");
});

io.on('connection', function(socket){
    // console.log("a user is connected");
    socket.on("chat message", function(msg){
        console.log("message: " + msg);
        io.emit('chat message', msg);
    });
    // socket.boradcast.emit("hi");
});


http.listen(PORT, () => {
    console.log("App is listening on 3000");
})
