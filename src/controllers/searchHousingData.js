const HouseLotModels = require('../models/HouseDataModel');
const HouseLotGeoModels = require('../models/HouseDataGeoModel')

const getHouseLotData = async (req, res) => {
    const data = await HouseLotModels.find();
    if (data) {
        res.status(200).json(data)
    };
};

const getHouseLotGeoData = async (req, res) => {
    const data = await HouseLotGeoModels.find();
    if (data) {
        res.status(200).json(data)
    };
};

module.exports = { getHouseLotData, getHouseLotGeoData };