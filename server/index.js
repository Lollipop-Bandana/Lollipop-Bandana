var express = require('express');
var bodyParser = require('body-parser');
var roomRouter = require('./routers/room.js');
var roomyRouter = require('./routers/roomy.js');


var port = 8000;
var app = express();


// use middleware here
app.use(express.static(__dirname + '/../src'));
app.use(bodyParser.json());
app.use('/api/room', roomRouter); // adjust router name and endpoint when necessary
app.use('/api/roomy', roomyRouter); // adjust router name and endpoint when necessary


app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
