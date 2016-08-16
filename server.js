var express = require('express'); //give access to express API (pass in name of depencency from .json)

//Create app
var app = express(); // create App (call express with no argument)

app.use(express.static('public')); // tell it which folder to serve (exposes 'public' folder to web server)

app.listen(3000, function() { // start server (pass in port and function that's called when server is up)
  console.log('Express server is up on port 3000');
});
