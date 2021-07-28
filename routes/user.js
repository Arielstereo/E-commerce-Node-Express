const express = require('express');
const router = express.Router();
const model = require('./../models/users');

const get = async(req, res)=> {
    const {id} = req.params;
    const [user] = await model.getUser(id);
    res.render('editUser', {user});
}

const edit = async(req, res) => {
    const {id} = req.params;
    const user = req.body;
    const {insertId} = await model.editUser(id,user);
    res.redirect('/travels');
}

router.get('/edit/:id', get);
router.post('/edit/:id', edit);

module.exports = router;