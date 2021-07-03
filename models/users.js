const pool = require('./../utils/bd');

const create = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_USERS, obj];
    return await pool.query(query, params);
}
   



module.exports = {create};