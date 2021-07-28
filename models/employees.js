const pool = require("./../utils/bd");

const getAll = async (req, res) => {
  try {
    const query = "SELECT * FROM ?? AS e WHERE e.removed = 0";
    const params = [process.env.T_EMPLOYEES];
    return await pool.query(query, params);
  } catch (error) {
    console.error(error);
  }
};
const getSingle = async (id) => {
  try {
    const query = "SELECT e.id, e.name, e.surname, e.file_number, e.sector FROM ?? AS e WHERE e.removed = 0 AND id = ?";
    const params = [process.env.T_EMPLOYEES, id];
    return await pool.query(query, params);
  } catch (error) {
    console.error(error);
  }
};

const create = async (obj) => {
  try {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_EMPLOYEES, obj];
    return await pool.query(query, params);
  } catch (error) {
    console.error(error);
  }
};

const delEmployee = async (id) => {
  try {
    const query = "UPDATE ?? SET removed = 1 WHERE id = ?";
    const params = [process.env.T_EMPLOYEES, id];
    return await pool.query(query, params);
  } catch (error) {
    console.error(error);
  }
};

const update = async (id, obj) => {
  try {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_EMPLOYEES, obj, id];
    return await pool.query(query, params);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAll, getSingle, create, delEmployee, update };
