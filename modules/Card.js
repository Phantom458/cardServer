const Sequelize = require('sequelize');
const db = require('../config/database');

const Card =db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING
    },
    
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    
    profession: {
        type: Sequelize.STRING
    },
    
    organisation: {
        type: Sequelize.STRING
    },
    
    phone: {
        type: Sequelize.INTEGER,
        unique: true
    },
    
    linkedin: {
        type: Sequelize.STRING,
        unique: true
    },
    
    password: {
        type: Sequelize.STRING
    }
})

module.exports = Card;