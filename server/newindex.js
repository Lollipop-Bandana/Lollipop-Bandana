const express = require('express');
const app = express();
const graph = require('fbgraph');
// const router = require('./routes.js');
const db = require('./db');
var controller = require('./controller');


//facebook api keys... dont add to github!
const conf = require('./config');

// Configuration
// app.use('/api', router);
app.use(express.static(__dirname + '/../mysrc/'));

// app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// Routes

// app.get('/', function(req, res){
//   res.render("index", { title: "click link to connect" });
// });

app.get('/api/userprofile', function(req, res, next) {
  res.send('hi');
});

app.get('/status', function(req, res, next) {
  if (graph.getAccessToken()) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.get('/auth/login', function(req, res) {

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
      "code":           req.query.code
  }, function (err, facebookRes) {
    graph.batch([
      {
        method: "GET",
        relative_url: "me" // Get the current user's profile information
      },
      {
        method: "GET",
        relative_url: "me/friends" // Get the friends of the current user that also use the app
      }
    ], function(err, res) {
      console.log(res);
      const profile = JSON.parse(res[0].body);
      const friends = JSON.parse(res[1].body);

      db.User.findOrCreate({ where: {
          id: profile.id
        }, defaults: {
          id: profile.id,
          name: profile.name
        }}).spread((user, created) => {
          console.log('it worked', user, created);
        });

    });
    res.redirect('/');
  });
});

app.get('/auth/logout', function(req, res) {
  graph.setAccessToken(null);
  console.log(graph.getAccessToken());
  res.redirect('/');
});


// user gets sent here after being authorized
// app.get('/', function(req, res) {
//   res.render("index", { title: "Logged In" });
// });


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port %d", port);
});
