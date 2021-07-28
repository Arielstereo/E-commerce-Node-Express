const express = require('express');
const router = express.Router();
const model = require('./../../models/employees');

const getEmployees = async(req, res)=> {
    const employees = await model.getAll();
    res.render('admin/adminEmployees', {employees});
}


const createEmployee = async(req, res) =>{
    const employee = req.body;
    const {insertId} = await model.create(employee);
    res.redirect('/admin/employees');
}

const deleteEmployee = async(req, res) =>{
    const {id} = req.params;
    const del = await model.delEmployee(id);
    res.redirect('/admin/employees');
}

const getEmployee = async(req, res)=> {
    const {id} = req.params;
    const [employee] = await model.getSingle(id);
    res.render('admin/editEmployee', {employee});
}

const updateEmployee = async(req, res) => {
    const {id} = req.params;
    const employee = req.body;
    const {insertId} = await model.update(id, employee);
    res.redirect('/admin/employees');
}


router.get('/', getEmployees);
router.get('/create', (req, res)=>{res.render('admin/createEmployee')});
router.post('/create', createEmployee);
router.get('/delete/:id', deleteEmployee);
router.get('/update/:id', getEmployee);
router.post('/update/:id', updateEmployee);

module.exports = router;