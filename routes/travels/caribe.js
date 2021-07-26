const express = require('express');
const router = express.Router();
const model = require('./../../models/products');
const {getUser} = require('./../../models/users');


const get = async(req, res) => {
    const products = await model.getCaribe();
    const [user] = await getUser(req.session.user);
    res.render('travels/caribe', {products, user});
}

const single = async(req,res) => {
    
    const [product] = await model.getSingle(req.params.id);
    res.render('travels/reserve', {product});
}



router.get('/', get);
router.get('/reserve/:id', single);

module.exports = router;
