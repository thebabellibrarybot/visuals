const express = require('express');
const router = express.Router(); 
const { getHouseLotData } = require('../controllers/searchHousingData');

// get stats by date
router.get('/', getHouseLotData);

module.exports = router; 