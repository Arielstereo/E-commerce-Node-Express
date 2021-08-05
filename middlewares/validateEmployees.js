const { schemas } = require('./schemas/employees');

const validateEmp = (req, res, next) => {
    const {error, value} = schemas.newEmployee.validate(req.body);
    error ? res.render('admin/createEmployee', {message: error.details[0].message}) : next();
}

module.exports = {validateEmp};