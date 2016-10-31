var Sequelize = require('sequelize');
var db = new Sequelize('roomy', 'root', null, {
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
  looking: Sequelize.BOOLEAN,
  have: Sequelize.BOOLEAN
});

var Have = db.define('Have', {
  userid: Sequelize.INTEGER,
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
  roomtype: Sequelize.STRING,
  price: Sequelize.INTEGER
});

var Looking = db.define('Looking', {
  userid: Sequelize.INTEGER,
  roomtype: Sequelize.STRING,
  minprice: Sequelize.INTEGER,
  maxprice: Sequelize.INTEGER
});

var Relationship = db.define('Relationship', {
  userid: { type: Sequelize.INTEGER},
  friendid: { type: Sequelize.INTEGER}
});

User.hasMany(Relationship, { foreignKey: 'userid', foreignKeyContraint: true });
User.hasMany(Relationship, { foreignKey: 'friendid', foreignKeyContraint: true });
User.hasOne(Have, { foreignKey: 'userid', foreignKeyContraint: true });
User.hasOne(Looking, { foreignKey: 'userid', foreignKeyContraint: true });

db.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function() {
  return db.sync({ force: true });
})
.then(function() {
  return db.query('SET FOREIGN_KEY_CHECKS = 1');
})
.then(function() {
  console.log('Database synchronized.');
  User.create({
    id: 12345,
    firstname: 'Michael',
    lastname: 'Stromberg',
    birthday: Date.now(),
    gender: 'M',
    aboutme: 'I like dogs.',
    quiz1: 10,
    quiz2: 10,
    quiz3: 10,
    quiz4: 10,
    quiz5: 10,
    quiz6: 10,
    quiz7: 10,
    quiz8: 10,
    quiz9: 10,
    quiz10: 10,
    looking: true,
    have: false
  });
  Looking.create({
    userid: 12345,
    roomtype: 'One Bedroom',
    minprice: 500,
    maxprice: 1500
  });
}, function(err) {
  console.log(err);
});

exports.User = User;
exports.Have = Have;
exports.Looking = Looking;
exports.Relationship = Relationship;
