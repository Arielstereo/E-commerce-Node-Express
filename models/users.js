const pool = require('./../utils/bd');

const create = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_USERS, obj];
    return await pool.query(query, params);
}
   
const auth = async (username, pass) => {
    const query = "SELECT id, admin FROM ?? WHERE username = ? AND pass = ? AND confirmEmail = 1"
    const params = [process.env.T_USERS, username, pass];
    return await pool.query(query, params);
}

const verify = async(uid) => {
    const query = "UPDATE ?? SET  confirmEmail = 1 WHERE authEmail = ?";
    const params = [process.env.T_USERS, uid];
    return await pool.query(query, params); 
}

const getUser = async(id) => {
    const query = "SELECT * FROM ?? WHERE id = ?";
    const params = [process.env.T_USERS, id];
    return await pool.query(query, params);
}

const editUser = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_USERS, obj, id];
    return await pool.query(query, params);
}

module.exports = {create, auth, verify, getUser, editUser};