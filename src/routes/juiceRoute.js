const express = require('express');
const router = express.Router();
const juiceController = require('../controllers/juiceController');

router.get('/items', juiceController.listItems);

module.exports = router;