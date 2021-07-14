const express = require('express');
const router = express.Router();
const model = require('./../../models/products');


const getAll = async(req, res) => {
    const products = await model.getEuro();
    res.render('travels/euro', {products})
}




router.get('/', getAll);

module.exports = router;