const express = require('express');
const router = express.Router();
const model = require('./../models/products');


const getAll = async(req, res) => {
    const products = await model.getAll();
    res.render('travels', {products})
}




router.get('/', getAll);

module.exports = router;
