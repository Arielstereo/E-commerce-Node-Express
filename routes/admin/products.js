const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = { dest: './public/tmp' };
const upload = multer(config);
const service = require('./../../services/products');
const model = require('./../../models/products');
const {getCategory} = require('./../../models/category');

const showCreate = async (req, res) => {
    const category = await getCategory();
    res.render('admin/createProducts', {category});
}

const create = async(req, res) => {
    const idImg = await service.createProduct(req.body, req.file);
    res.redirect('/admin/products');
}

const getProducts = async(req, res) => {
    const products = await model.getAll();
    res.render('admin/updateProduct', {products});
}

const deleteProduct = async(req, res) => {
    const {id} = req.params;
    const del = await model.delProduct(id);
    const deleteImg = await model.delImg(id);
    res.redirect('/admin/products')
}

const getProduct = async(req, res) => {
    const [product] = await model.getSingle(req.params.id);
    const category = await getCategory();
    res.render('admin/editProduct', {product, category});
}

const update = async(req, res) => {
    
    const idImg = await service.updateProduct(req.params.id, req.body, req.file);
    res.redirect('/admin/products');
}


router.get('/create', showCreate);
router.post('/create', upload.single("img"), create);
router.get('/', getProducts);
router.get('/delete/:id', deleteProduct);
router.get('/update/:id', getProduct);
router.post('/update/:id', upload.single("img"), update);


module.exports = router;