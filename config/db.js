var Sequelize = require('sequelize');

var sequelize = new Sequelize('eventpic', 'eventpic', '3v3ntp1c', {
  host: '104.131.72.155',//'eventpic.ddns.net',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
