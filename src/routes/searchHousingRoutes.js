const express = require('express');
const router = express.Router(); 
const { getHouseLotData, getHouseLotGeoData } = require('../controllers/searchHousingData');

// get stats by date
router.get('/', getHouseLotData);

// get stats for geoMap
router.get('/geo', getHouseLotGeoData);

module.exports = router; 