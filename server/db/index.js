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
User.hasOne(Looking, { foreignKey: 'userid', foreignKeyContraint:true });

db.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
    return db.sync({ force: true });
})
.then(function(){
    return db.query('SET FOREIGN_KEY_CHECKS = 1')
})
.then(function(){
    console.log('Database synchronised.');
}, function(err){
    console.log(err);
});

exports.User = User;
exports.Have = Have;
exports.Looking = Looking;
exports.Relationship = Relationship;
