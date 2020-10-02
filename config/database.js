const Sequelize = require('sequelize');

//module.exports makes code ready to be called elsewhere
module.exports = new Sequelize('heroku_91fbe24ccc62c72', 'b198b974120c73', '6c98148b', {
    host: 'us-cdbr-iron-east-01.cleardb.net',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  });
