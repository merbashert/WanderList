const express = require('express');
const app = express();
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.static('public'))



mongoose.connect('mongodb://localhost:27017/breakfastcrud', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () =>{
    console.log('connected to mongoose');
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("App is listening on 3000");
})
