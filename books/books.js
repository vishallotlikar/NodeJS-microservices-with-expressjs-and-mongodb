// Load express
const express = require('express');
const app = express();

// Load bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Load mongoose
const mongoose = require("mongoose");

// Load models
require("./models/books");
const book = mongoose.model("books");

//Connect to mongodb
mongoose.connect("mongodb+srv://vishal:vishalpassword@nodejs-jiiyk.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, () => {
        console.log("Database is connected!!")
    })

app.get('/', (req, res) => {
    res.send('This is our main Books endpoint!!')
})

// Create a new book
app.post("/book", (req, res) => {
    book.create({
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    }).then(resp => {
        console.log("New book created!!!");
        res.send(resp);
    }).catch(err => {
        throw err;
    })
})

app.listen(4545, () => {
    console.log('Server is running on port 4545')
})