const express = require('express');
const router = express.Router();
const model = require('./../../models/products');


const get = async(req, res) => {
    const products = await model.getCaribe();
    res.render('travels/caribe', {products})
}




router.get('/', get);

module.exports = router;
