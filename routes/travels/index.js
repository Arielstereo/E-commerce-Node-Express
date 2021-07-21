const express = require('express');
const router = express.Router();
const {getUser} = require('./../../models/users');


const showUser = async (req, res) => {
    const [user] = await getUser(req.session.user);
    res.render('travels/index', {user});
}





router.get('/', showUser);
module.exports = router;