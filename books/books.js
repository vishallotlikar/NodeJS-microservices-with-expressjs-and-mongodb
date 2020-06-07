// Load express
const express = require('express');
const app = express();

// Load mongoose
const mongoose = require("mongoose");

//Connect to mongodb
mongoose.connect("mongodb+srv://vishal:pass@nodejs-jiiyk.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log("Database is connected!!")
    })

app.get('/', (req, res) => {
    res.send('This is our main Books endpoint!!')
})

app.listen(4545, () => {
    console.log('Server is running on port 4545')
})