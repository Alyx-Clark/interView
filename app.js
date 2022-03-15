const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
const multer = require('multer') //
const upload = multer({ dest: 'images/'}) //
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/images', express.static('images'))

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

// app.post('/api/images', upload.single('image'), (req, res) => { 
//     const imagePath = req.file.path 
//     const description = req.body.description
//     res.send({description, imagePath}) 
    
// }) 

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("/api/users", users);
app.use("/api/tweets", tweets);
