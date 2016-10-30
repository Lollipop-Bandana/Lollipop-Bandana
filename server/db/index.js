var Sequelize = require('sequelize');
var db = new Sequelize('roomy', 'root', '123', {
  dialect: 'mysql'
});

db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

var User = db.define('User', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
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
  // profilepicture: { type: Sequelize.STRING, validate: { isUrl: true }},
  looking: Sequelize.BOOLEAN,
  have: Sequelize.BOOLEAN
});

var Have = db.define('Have', {
  userid: { type: Sequelize.INTEGER, primaryKey: true },
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
  roomtype: Sequelize.STRING,
  price: Sequelize.INTEGER
});

var Looking = db.define('Looking', {
  userid: { type: Sequelize.INTEGER, primaryKey: true },
  roomtype: Sequelize.STRING,
  minprice: Sequelize.INTEGER,
  maxprice: Sequelize.INTEGER
});

var Relationship = db.define('Relationship', {
  userid: { type: Sequelize.INTEGER},
  friendid: { type: Sequelize.INTEGER}
});

User.hasMany(Friend, { foreignKey: 'userid' });
User.hasMany(Friend, { foreignKey: 'friendid' });
User.hasOne(Have, { foreignKey: 'userid' });
User.hasOne(Looking, { foreignKey: 'userid' });

User.sync({ force: true })
.then(function() {
  return User.create({
    id: 1,
    firstname: 'M',
    lastname: 'O',
    birthday: Date.now(),
    gender: 'Female',
    aboutme: 'i hate brew',
    quiz1: 1, 
    quiz2: 1, 
    quiz3: 1, 
    quiz4: 1, 
    quiz5: 1, 
    quiz6: 1, 
    quiz7: 1, 
    quiz8: 1, 
    quiz9: 1, 
    quiz10: 1,
    looking: true,
    have: false
  });
});

Have.sync({ force: true });

Looking.sync({ force: true })
.then(function() {
  return Looking.create({
    userid: 1,
    roomtype: 'One Bedroom',
    minprice: 500,
    maxprice: 1000
  });  
});

Relationship.sync({ force: true })
.then(function() {
  return Relationship.create({
    userid: 1,
    friendid: 2
  });
});

exports.User = User;
exports.Have = Have;
exports.Looking = Looking;
exports.Relationship = Relationship;
