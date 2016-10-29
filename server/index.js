var express = require('express');
var app = express();
var router = require('./routes.js');
var db = require('./db');

var port = 8000;

// use middleware here

//possibly change endpoint 
app.use('/api/roomy', router); 

app.use(express.static(__dirname + '/../src'));

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
