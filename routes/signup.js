const express = require('express');
const router = express.Router();
const model = require('../models/users');
const sha1 = require('sha1');

const createUser = async (req, res) => {
    const user = req.body;
    const userDB = {
        username: user.username,
        pass: sha1(user.pass),
        email: user.email,
        country: user.country
    }

   const  addUser = await model.create(userDB);
   res.redirect('/signin');
}





router.get('/', (req, res) => res.render('login/signup'));
router.post('/', createUser);

module.exports = router