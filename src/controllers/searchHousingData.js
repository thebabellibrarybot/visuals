const HouseLotModels = require('../models/HouseDataModel');

const getHouseLotData = async (req, res) => {
    const data = await HouseLotModels.find();
    if (data) {
        res.status(200).json(data)
    };
};

module.exports = { getHouseLotData };