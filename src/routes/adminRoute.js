const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/collections', adminController.listCollections);

module.exports = router
