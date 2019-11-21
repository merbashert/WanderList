const express = require('express');
const app = express();
const mongoose = require('mongoose')


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

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
<<<<<<< HEAD
db.on('connected', () => console.log('mongo connected: ', ));
=======
db.on('connected', () => console.log('mongo connected: '));
>>>>>>> ce92d05e64f803089108e8203d54d282cf83eb30
db.on('disconnected', () => console.log('mongo disconnected'));

///////////////////////

app.use(express.json())
app.use(express.static('public'))


app.get('/flights', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log("App is listening on 3000");
})
