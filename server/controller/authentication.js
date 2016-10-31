const graph = require('fbgraph');
const conf = require('../config');
const db = require('../db');


module.exports = {
  login:  function(req, res) {

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

  },
  logout: function(req, res) {
    graph.setAccessToken(null);
    console.log(graph.getAccessToken());
    res.redirect('/');
  }
}
