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
  id: { type: Sequelize.BIGINT, primaryKey: true },
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
  profilepicture: Sequelize.STRING,
  looking: Sequelize.BOOLEAN,
  have: Sequelize.BOOLEAN
});

var Have = db.define('Have', {
  userid: Sequelize.BIGINT,
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.INTEGER,
  roomtype: Sequelize.STRING,
  price: Sequelize.INTEGER
});

var Looking = db.define('Looking', {
  userid: Sequelize.BIGINT,
  roomtype: Sequelize.STRING,
  minprice: Sequelize.INTEGER,
  maxprice: Sequelize.INTEGER
});

var Relationship = db.define('Relationship', {
  userid: { type: Sequelize.BIGINT},
  friendid: { type: Sequelize.BIGINT}
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
    birthday: '12/28/1987',
    gender: 'Male',
    aboutme: 'I like dogs.',
    quiz1: 8,
    quiz2: 8,
    quiz3: 8,
    quiz4: 8,
    quiz5: 8,
    quiz6: 8,
    quiz7: 8,
    quiz8: 8,
    quiz9: 8,
    quiz10: 8,
    profilepicture: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12019994_10104226862625247_3533097912733085828_n.jpg?oh=b0fc0f5e9c011571554f630329c5e72b&oe=588B5CF3',
    looking: true,
    have: false
  });
  Have.create({
    userid: 12345,
    address1: '123 Fake Street',
    address2: 'Apt. F',
    city: 'Fakeville',
    state: 'CA',
    zipcode: 93103,
    roomtype: 'One Bedroom',
    price: 1800
  });
  User.create({
    id: 12346,
    firstname: 'Felicia',
    lastname: 'Fong',
    birthday: '09/29/1992',
    gender: 'Female',
    aboutme: 'It would be awesome to move in with someone who has a dog.',
    quiz1: 5,
    quiz2: 5,
    quiz3: 5,
    quiz4: 5,
    quiz5: 5,
    quiz6: 5,
    quiz7: 5,
    quiz8: 5,
    quiz9: 5,
    quiz10: 5,
    profilepicture: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/1908147_10154081582864552_5571469349424214024_n.jpg?oh=be523d904987bf1f625ac9852903e2e1&oe=588B8995',
    looking: true,
    have: false
  });
  Looking.create({
    userid: 12346,
    roomtype: 'One Bedroom',
    minprice: 1000,
    maxprice: 2000
  });
  User.create({
    id: 12347,
    firstname: 'Shensen',
    lastname: 'Wang',
    birthday: '06/19/1992',
    gender: 'Male',
    aboutme: 'I have zero furniture.',
    quiz1: 7,
    quiz2: 7,
    quiz3: 7,
    quiz4: 7,
    quiz5: 7,
    quiz6: 7,
    quiz7: 7,
    quiz8: 7,
    quiz9: 7,
    quiz10: 7,
    profilepicture: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12359989_10208011562505515_6986849593287005772_n.jpg?oh=341e739471313d0d60ec5886de003e27&oe=58CF2908',
    looking: true,
    have: false
  });
  Looking.create({
    userid: 12347,
    roomtype: 'Shared Bedroom',
    minprice: 500,
    maxprice: 1500
  });
  User.create({
    id: 12348,
    firstname: 'Marissa',
    lastname: 'Okada',
    birthday: '10/20/1994',
    gender: 'Female',
    aboutme: 'I drive fast.',
    quiz1: 6,
    quiz2: 6,
    quiz3: 6,
    quiz4: 6,
    quiz5: 6,
    quiz6: 6,
    quiz7: 6,
    quiz8: 6,
    quiz9: 6,
    quiz10: 6,
    profilepicture: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/11742904_10153323694270617_3940034414772100605_n.jpg?oh=8f8bdf2543d49651507a57a75fa4a9b2&oe=58D0A3AC',
    looking: true,
    have: false
  });
  Looking.create({
    userid: 12347,
    roomtype: 'Shared Bedroom',
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
