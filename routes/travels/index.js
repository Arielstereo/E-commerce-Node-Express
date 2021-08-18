const express = require('express');
const router = express.Router();
const {getUser} = require('./../../models/users');
const {getCity} = require('./../../models/products');


const showUser = async (req, res) => {
    const [user] = await getUser(req.session.user);
    res.render('travels/index', {user});
}

const searchTravel = async(req, res) => {
    let {search} = req.body;
    search = '%' + search + '%';
    const [product] = await getCity(search);
    res.render('travels/reserve', {product})
}



router.get('/', showUser);
router.post('/', searchTravel);
module.exports = router;