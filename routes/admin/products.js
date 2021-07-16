const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = { dest: './public/tmp' };
const upload = multer(config);
const service = require('./../../services/products');
const model = require('./../../models/products');

const create = async(req, res) => {
    const idImg = await service.createProduct(req.body, req.file);
    res.redirect('/travels');
}

const getProducts = async(req, res) => {
    const products = await model.getAll();
    res.render('admin/updateProduct', {products});
}

const getProduct = async(req, res) => {
    const [product] = await model.getSingle(req.params.id);
    res.render('admin/editProduct', {product});
}


router.get('/create', (req, res) => res.render('admin/createProducts'));
router.post('/create', upload.single("img"), create);
router.get('/update', getProducts);
router.get('/edit/:id', getProduct);

module.exports = router;