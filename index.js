// All required npm modules
var express = require('express');
var fs = require("fs");
var path = require('path');

// Initialises express application
var app = express();

// Allows images to be displayed at http://localhost:8080/public/filename.extension
app.use(express.static('public'));

// This responds with instructions on the homepage
app.get('/', function(req, res) {
  console.log("Got a GET request for the homepage");
  res.sendFile(path.join(__dirname + '/homepage.html'));
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
