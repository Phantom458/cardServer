const Sequelize = require('sequelize');

//module.exports makes code ready to be called elsewhere
module.exports = new Sequelize('cardapp', 'root', 'hellUvashit421//', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  });