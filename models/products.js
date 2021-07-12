const pool = require('./../utils/bd');

const create = (obj) => 
    pool.query("INSERT INTO ?? SET ?", [process.env.T_PRODUCTS, obj]).then(response => response).catch(err => console.error(err));

const createImg = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_IMAGES, obj]).then(response => response).catch(err => console.error(err));

const getAll = async() => {
    try {
        const query = "SELECT p.city, p.description, p.price, i.uid FROM ?? AS p JOIN ?? AS i ON p.id = i.id_product WHERE p.removed = 0";
        const params = [process.env.T_PRODUCTS, process.env.T_IMAGES];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
        
    }
}    


module.exports = {create, createImg, getAll};




