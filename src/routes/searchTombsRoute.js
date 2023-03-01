const express = require('express');
const router = express.Router(); 
const { getNumTombsByValue } = require('../controllers/searchTombsController');

// get num tombs by date
router.get('/numtombs', getNumTombsByValue);

module.exports = router; 