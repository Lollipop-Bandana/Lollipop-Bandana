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
        quiz1: req.body.quiz1,
        quiz2: req.body.quiz2,
        quiz3: req.body.quiz3,
        quiz4: req.body.quiz4,
        quiz5: req.body.quiz5,
        quiz6: req.body.quiz6,
        quiz7: req.body.quiz7,
        quiz8: req.body.quiz8,
        quiz9: req.body.quiz9,
        quiz10: req.body.quiz10,
        profilepicture: req.body.profilepicture,
        totalfriends: req.body.totalfriends,
        looking: req.body.looking,
        have: req.body.have
        }})
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
        });
    }
  }
};