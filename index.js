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

// Sets up the server for the application to run on
  var server = app.listen(8083, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
