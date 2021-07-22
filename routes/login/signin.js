const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const model = require('./../../models/users');
const {validateSignin} = require('./../../middlewares/validateUsers');

const login = async (req, res) => {
    let {username, pass} = req.body;
    pass = sha1(pass);
    const logged = await model.auth(username, pass);
    if(logged.length === 0) {
        res.render('login/signin', { message: '* El usuario y/o contraseña no son válidos!'})
        }
    else {
        
        const [{id, admin}] = logged;
        req.session.user = id;
        req.session.admin = admin;
        
        admin ? res.redirect('/admin') : 
        res.redirect('/travels');
    }

}   






router.get('/', (req, res) => res.render('login/signin'));
router.post('/', validateSignin, login);
module.exports = router;