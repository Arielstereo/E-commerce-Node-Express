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



router.get('/create', (req, res) => res.render('admin/createProducts'));
router.post('/create', upload.single("img"), create);

module.exports = router;