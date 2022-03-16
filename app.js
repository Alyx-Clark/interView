const express = require("express");
const app = express();
const port = process.env.PORT || 5500;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const videos = require("./routes/api/videos");
const feedbacks = require("./routes/api/feedbacks");
const rubrics = require("./routes/api/rubrics");
const bodyParser = require('body-parser');
const fs = require('fs')
const passport = require('passport');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World"));

// app.post('/api/images', upload.single('image'), (req, res) => { 
//     const imagePath = req.file.path 
//     const description = req.body.description
//     res.send({description, imagePath}) 
    
// })

const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use("/api/videos", videos);
app.use("/api/feedbacks", feedbacks);
app.use("/api/rubrics", rubrics);

app.use(passport.initialize());
require('./config/passport')(passport);
