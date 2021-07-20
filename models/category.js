const pool = require('./../utils/bd');

const getCategory = async() => {
    const query = "SELECT * FROM ??";
    const params = [process.env.T_CATEGORY];
    return await pool.query(query, params);
}

module.exports = {getCategory};