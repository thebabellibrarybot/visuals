const express = require('express');
const router = express.Router(); 
const { getHouseLots } = require('../controllers/searchHousingData');

// get stats by date
router.get('/', getHouseLots);

module.exports = router; 