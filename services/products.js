const {create, createImg, update, updateImg} = require('./../models/products');
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

const updateProduct = async(id, body, file) => {
    try {
        const id_product = await update(id, body);
        if(file) {
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await updateImg(id, obj);
            return idImg;
        }
        else {
            return id_product;
        }
    } catch (error) {
        console.error(error);
    }
}




module.exports = {createProduct, updateProduct};



