var db = require('../db');
var auth = require('./authentication');

module.exports = {
  auth: auth,
  users: {
    getOne: function (req, res) {
      console.log('inside getOne');
      db.User.findOne({ where: { id: req.body.id },
      attributes: ['id', 'firstname', 'lastname', 'birthday', 'looking', 'have', 'gender', 'aboutme'] })
        .then(function(user) {
          if (user.have) {
            db.Have.findOne({ where: { userid: user.id },
              attributes: ['address1', 'address2', 'city', 'state', 'zipcode', 'roomtype', 'price'] })
            .then(function(candidate) {
              for (var key in candidate) {
                if (user[key] === undefined) {
                  user[key] = candidate[key];
                }
              }
              res.send(user);
            });
          } else {
            db.Looking.findOne({ where: { userid: user.id },
              attributes: ['roomtype', 'minprice', 'maxprice'] })
            .then(function(candidate) {
              for (var key in candidate) {
                if (user[key] === undefined) {
                  user[key] = candidate[key];
                }
              }
              res.send(user);
            });
          }
        });
    },
    getMatches: function(req, res) {
      db.User.find({ where: {
        id: req.body.friendslist,
        looking: req.body.looking
      }})
      .then(function(match) {
        res.send(match);
      });
    },
    postOne: function (req, res) {
      db.User.findOrCreate({ where: {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthday: req.body.birthday,
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
        friendslist: req.body.friendslist,
        looking: req.body.looking,
        have: req.body.have
      }})
      .spread(function(user, created) {
        res.sendStatus(created ? 201 : 200);
      });
    }
  },
  have: {
    postOne: function(req, res) {
      db.have.findOrCreate({ where: {
        userid: req.body.id,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        roomtype: req.body.roomtype,
        price: req.body.price
      }})
      .spread(function(app, created) {
        res.sendStatus(created ? 201 : 200)
      });
    }
  },
  looking: {
    postOne: function(req, res) {
      db.have.findOrCreate({ where: {
        userid: req.body.id,
        roomtype: req.body.roomtype,
        minprice: req.body.minprice,
        maxprice: req.body.maxprice
      }})
      .spread(function(app, created) {
        res.sendStatus(created ? 201 : 200);
      });
    }
  }
};
