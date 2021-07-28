const express = require('express');
const router = express.Router();
const model = require('./../../models/users');
const sha1 = require('sha1');
const {v4: uuid} = require('uuid');
const { send } = require('./../../services/mail');
const {validateSignup}  = require('./../../middlewares/validateUsers');

const createUser = async (req, res) => {
    const user = req.body;
    const uid = uuid();
    const userDB = {
        username: user.username,
        pass: sha1(user.pass),
        email: user.email,
        country: user.country,
        authEmail : uid
    }

   const  addUser = await model.create(userDB);
    send({
        mail: userDB.email,
        subject: 'Bienvenido a E-flight',
        body: `🛫 <span class="fs-4">E-flight</span>
        <h1> Bienvenido ${userDB.username}!</h1>
        <h2>Gracias por registrarte en E-flight, para activar tu usuario ingresa al siguiente enlace: </h2>
        <a href="${process.env.URL_SERVER}:${process.env.URL_PORT}/signup/verify/${userDB.authEmail}">Validar email</a>`

    });
    res.redirect('/signin');
}

const verify = async (req, res) => {
    const {uid} = req.params;
    const messageId = await model.verify(uid);
    
    res.redirect('/signin');
    }



router.get('/', (req, res) => res.render('login/signup'));
router.post('/', validateSignup, createUser);
router.get('/verify/:uid', verify);

module.exports = router;