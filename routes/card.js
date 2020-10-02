const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Card = require('../modules/Card');

//only / required as it has already been pointed to this file
router.get('/get/:id', (req, res) =>   {    //to get list
    Card.findAll({
        where: {
          id: req.params.id
        }
      })
    // Card.findAll()       //findAll returns a promise
    .then(card => {
        console.log(card);
        res.send(card);    //to make sure its not hanging
    })
    .catch(err => console.log(err))
    });

//Adding a data
router.post('/add', (req, res) => {
    console.log('ay', req.body)
    const data = {
        name: req.body.name,
        email: req.body.email,
        profession: req.body.profession,
        organisation: req.body.organisation,
        phone: req.body.phone,
        linkedin: req.body.linkedin,
        password: req.body.password,
    }

    let { name, email, profession, organisation, phone, linkedin, password } = data;     //data to pull out

    //To insert to database table
    Card.create({
        name,                  //need not assign variables since the names are the same
        email,
        profession,
        organisation,
        phone,
        linkedin,
        password
    })
    .then(gig => res.send(data))
    .catch(err => console.log(err));
});

// router.put('/update', (req, res) => {
//     Card.update({ profession: '10000' }, {
//         where: {
//           profession: 30
//         }
//       })
//     .then(gig => res.send('profession updated'))
//     .catch(err => console.log(err));
// })

// router.delete('/delete', (req, res) => {
//     Card.destroy({
//         where: {
//           id: 5
//         }
//     })
//     .then(gig => res.send('User Data Deleted'))
//     .catch(err => console.log(err));
// })

module.exports = router;