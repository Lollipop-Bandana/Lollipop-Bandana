var express = require('express');
var bodyParser = require('body-parser');
// require routers here

var port = 8000;

var app = express();

// use middleware here
app.use(express.static(__dirname + '/../src'));


app.listen(port, function() {
  console.log('Listening on port: ' + port);
});