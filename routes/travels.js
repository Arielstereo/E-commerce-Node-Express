const express = require('express');
const router = express.Router();



router.get('/', (req, res) => res.render('travels', {title: 'Travels'}));

module.exports = router;
