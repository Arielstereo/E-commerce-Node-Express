const {create, createImg} = require('./../models/products');
const {imgFile} = require('./../utils/fileHandler');

const createProduct = async(body, file) => {
    try {
        const {insertId : id_product} = await create(body);
        const uid = imgFile(file);
        const obj = { id_product, uid };
        const {insertId : idImg} = await createImg(obj);
        return idImg;

    } catch (error) {
        console.error(error);
    }
}

module.exports = {createProduct};



