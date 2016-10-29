const express = require('express');
const app = express();
const graph = require('fbgraph');


//facebook api keys... dont add to github!
const conf = require('./config');


// Configuration

app.use(express.static(__dirname + '/../mysrc/'));

// app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// Routes

// app.get('/', function(req, res){
//   res.render("index", { title: "click link to connect" });
// });

app.get('/auth/facebook', function(req, res) {

  // we don't have a code yet
  // so we'll redirect to the oauth dialog
  if (!req.query.code) {
    var authUrl = graph.getOauthUrl({
        "client_id":     conf.client_id,
        "redirect_uri":  conf.redirect_uri,
        "scope":         conf.scope
    });

    if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
      res.redirect(authUrl);
    } else {  //req.query.error == 'access_denied'
      res.send('access denied');
    }
    return;
  }

  // code is set
  // we'll send that and get the access token
  graph.authorize({
      "client_id":      conf.client_id,
      "redirect_uri":   conf.redirect_uri,
      "client_secret":  conf.client_secret,
      "code":           req.query.codes
  }, function (err, facebookRes) {
    res.redirect('/');
  });


});


// user gets sent here after being authorized
// app.get('/', function(req, res) {
//   res.render("index", { title: "Logged In" });
// });


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port %d", port);
});
