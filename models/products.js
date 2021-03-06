const pool = require('./../utils/bd');

const create = (obj) => 
    pool.query("INSERT INTO ?? SET ?", [process.env.T_PRODUCTS, obj]).then(response => response).catch(err => console.error(err));

const createImg = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_IMAGES, obj]).then(response => response).catch(err => console.error(err));

const getAll = async() => {
    try {
        const query = "SELECT p.id, p.city, p.description, p.price, p.id_category, i.uid FROM ?? AS p JOIN ?? AS i ON p.id = i.id_product JOIN ?? AS c ON c.id = p.id_category WHERE p.removed = 0";
        const params = [process.env.T_PRODUCTS, process.env.T_IMAGES, process.env.T_CATEGORY];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}    

const getUSA = async() => {
    try {
        const query = "SELECT p.id, p.city, p.description, p.price, p.id_category, i.uid FROM ?? AS p JOIN ?? AS i ON p.id = i.id_product JOIN ?? AS c ON c.id = p.id_category WHERE c.name_categ LIKE '%USA%' AND p.removed = 0";
        const params = [process.env.T_PRODUCTS, process.env.T_IMAGES, process.env.T_CATEGORY];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
        
    }
}    

const getEuro = async() => {
    try {
        const query = "SELECT p.id, p.city, p.description, p.price, p.id_category, i.uid FROM ?? AS p JOIN ?? AS i ON p.id = i.id_product JOIN ?? AS c ON c.id = p.id_category WHERE c.name_categ LIKE '%Europa%' AND p.removed = 0";
        const params = [process.env.T_PRODUCTS, process.env.T_IMAGES, process.env.T_CATEGORY];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
        
    }
}    

const getSudam = async() => {
    try {
        const query = "SELECT p.id, p.city, p.description, p.price, p.id_category, i.uid FROM ?? AS p JOIN ?? AS i ON p.id = i.id_product JOIN ?? AS c ON c.id = p.id_category WHERE c.name_categ LIKE '%Sudamerica%' AND p.removed = 0";
        const params = [process.env.T_PRODUCTS, process.env.T_IMAGES, process.env.T_CATEGORY];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
        
    }
}    

const getCaribe = async() => {
    try {
        const query = "SELECT p.id, p.city, p.description, p.price, p.id_category, i.uid FROM ?? AS p JOIN ?? AS i ON p.id = i.id_product JOIN ?? AS c ON c.id = p.id_category WHERE c.name_categ LIKE '%Caribe%' AND p.removed = 0";
        const params = [process.env.T_PRODUCTS, process.env.T_IMAGES, process.env.T_CATEGORY];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}    

const getSingle = async(id) => {
    try {
        const query = "SELECT p.id, p.city, p.description, p.price, p.id_category, i.uid, c.name_categ FROM ?? AS p JOIN ?? AS i ON p.id = i.id_product JOIN ?? AS c ON c.id = p.id_category WHERE p.removed = 0 AND p.id= ?";
        const params = [process.env.T_PRODUCTS, process.env.T_IMAGES, process.env.T_CATEGORY,id];
        return await pool.query(query, params);  
    } catch (error) {
        console.error(error);
    }
}

const update = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id = ?";
        const params = [process.env.T_PRODUCTS, obj, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const updateImg = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id_product = ?";
        const params = [process.env.T_IMAGES, obj, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const delProduct = async(id) => {
    try {
        const query = "UPDATE ?? SET removed = 1 WHERE id = ?";
        const params = [process.env.T_PRODUCTS, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const delImg = async(id) => {
    try {
        const query = "UPDATE ?? SET removed = 1 WHERE id_product = ?";
        const params = [process.env.T_IMAGES, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const getCity = async(city) => {
    try {
        const query = "SELECT p.id, p.city, p.description, p.price, p.id_category, i.uid FROM ?? AS p JOIN ?? AS i ON p.id = i.id_product JOIN ?? AS c ON c.id = p.id_category WHERE p.city LIKE ? AND p.removed = 0";
        const params = [process.env.T_PRODUCTS, process.env.T_IMAGES, process.env.T_CATEGORY, city];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}    




module.exports = {create, createImg, getUSA, getEuro, getSudam, getCaribe, getAll, getSingle, update, updateImg, delProduct, delImg, getCity};




