const express = require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const app = express();      //initialize app

const db = require('./config/database');       //calling exported codes from database.js file
// const User = require('./models/user');

db.authenticate()         //testing the database
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

app.use(bodyParser());      //initialize body parser

app.get('/', (req, res) => res.send('INDEX'));      //route to access server. res.send to check in browser

//card route
app.use('/card', require('./routes/card'));

const PORT = process.env.PORT || 3000;      //defining local port

app.listen(PORT, console.log(`Server started on port ${PORT}`)); //run server. ${} to insert other data type

sequelize.sync()