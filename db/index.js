var Sequelize = require('sequelize');
var db = new Sequelize('roomy', 'root', '', {
  host: "localhost",
  port: 8000,
  dialect: 'mysql'
});

// we define the models we need using js--we don't need a schema file!
var User = db.define('User', {
  id: Sequelize.INTEGER,
  username: type:Sequelize.STRING(60),
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  birthday: Sequelize.DATE,
  gender: Sequelize.STRING,
  aboutme: Sequelize.STRING,
  quiz1: Sequelize.INTEGER, 
  quiz2: Sequelize.INTEGER, 
  quiz3: Sequelize.INTEGER, 
  quiz4: Sequelize.INTEGER, 
  quiz5: Sequelize.INTEGER, 
  quiz6: Sequelize.INTEGER, 
  quiz7: Sequelize.INTEGER, 
  quiz8: Sequelize.INTEGER, 
  quiz9: Sequelize.INTEGER, 
  quiz10: Sequelize.INTEGER,
  looking: Sequelize.BOOLEAN,
  have: Sequelize.BOOLEAN,
  profilepicture: { type: Sequelize.STRING, validate: { isUrl: true }},
  totalfriends: Sequelize.INTEGER
});

var Friend = db.define('Friend', {
  userid: Sequelize.INTEGER,
  friendid: Sequelize.INTEGER
});

Friend.belongsTo(User);
User.hasMany(Friend);


User.sync({force: true});
Friend.sync({force: true});

exports.User = User;
exports.Friend = Friend;
