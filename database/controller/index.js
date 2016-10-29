var db = require('../db');

module.exports = {
  users: {
    // retrieving all users in the database
    get: function (req, res) {
      db.User.findAll()
        .then(function(user) {
          res.json(user);
        });
    },
    post: function (req, res) {
      db.User.findOrCreate()
        .spread(function(user, created) {
          db.Message.create({
            userid: user.get('id'),
            text: req.body.message,
            roomname: req.body.roomname
          }).then(function(message) {
            res.sendStatus(201);
          });
        });
    }
  }
};