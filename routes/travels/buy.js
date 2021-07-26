const express = require('express');
const router = express.Router();

const buy = (req, res) => {
    res.render('travels/buy');
}

router.get('/', buy);

module.exports = router;