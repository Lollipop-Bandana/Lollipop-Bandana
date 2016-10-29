var express = require('express');
var path = require('path');


var port = 8000;
var app = express();
// connect to database here


// use middleware here
app.use(express.static(__dirname + '/src'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});


app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
