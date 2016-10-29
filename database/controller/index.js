var db = require('../db');

module.exports = {
  users: {
    get: function (req, res) {
      db.User.findAll()
        .then(function(users) {
          res.json(users);
        });
    },
    post: function (req, res) {
      // if using only id, we can change this to req.body.id
      db.User.findOrCreate({where: {
        id: req.body.id,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
        // (req.body.birthmonth + "/" + req.body.birthday + "/" + req.body.birthyear)
        gender: req.body.gender,
        aboutme: req.body.aboutme,
        }})
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
    }
  }
};