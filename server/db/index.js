var Sequelize = require('sequelize');
var db = new Sequelize('roomy', 'root', '', {
  host: "localhost",
  port: 8000,
  dialect: 'mysql'
});

var User = db.define('User', {
  // included both id and username, but we can choose either or
  id: { type: Sequelize.INTEGER, primaryKey: true },
  username: Sequelize.STRING(60),
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
  profilepicture: { type: Sequelize.STRING, validate: { isUrl: true }},
  totalfriends: Sequelize.INTEGER,
  looking: Sequelize.BOOLEAN,
  have: Sequelize.BOOLEAN
});

var Have = db.define('Have', {
  userid: Sequelize.INTEGER,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
  roomtype: Sequelize.STRING,
  price: Sequelize.INTEGER
});

var Looking = db.define('Looking', {
  userid: Sequelize.INTEGER,
  minprice: Sequelize.INTEGER,
  maxprice: Sequelize.INTEGER
});

var Friend = db.define('Friend', {
  userid: Sequelize.INTEGER,
  friendid: Sequelize.INTEGER
});

Friend.belongsTo(User);
Have.hasOne(User, { foreignKey: 'userid' });
Looking.hasOne(User, { foreignKey: 'userid' });
User.hasMany(Friend, { foreignKey: 'userid', foreignKey: 'friendid' });


User.sync({ force: true });
Friend.sync({ force: true });
Have.sync({ force: true });
Looking.sync({ force: true });

exports.User = User;
exports.Friend = Friend;
exports.Have = Have;
exports.Looking = Looking;
