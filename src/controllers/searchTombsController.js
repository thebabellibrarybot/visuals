const TombStatsModel = require('../models/MorganLibModel');

// get num tombs by value['location' or 'type']
// NOTE: probably not a good idea to do the data mappin in the controller... I have never tried this before and thought it might be cool
//       to map the data based on the axios request so that less data would be send per req but it seems to really be slowing things down...
//       if I have time I'm gonna put this in the commonAPI so the res obj in frontend is mapped instead...
const getNumTombsByValue = async (req, res) => {

    console.log('getNumTombsFired')
    const year = req.headers.year;
    const value = req.headers.value;
    const query = {
        "year": year
    }
    const foundData = await TombStatsModel.findOne(query)
    if (foundData) {
        if (value === 'location') {
            console.log('found location')
            const output = Object.entries(foundData.numTombsPerLocation).map(([value, num]) => ({
                value: value.toLowerCase(),
                num,
              }));
              
            res.status(200).json(output)
        };
        if (value === 'type') {
            console.log('found type')
            const output = Object.entries(foundData.numTombsPerType).map(([value, num]) => ({
                value: value.toLowerCase(),
                num,
              }));
              
            res.status(200).json(output)
        };
    };

};

module.exports = { getNumTombsByValue }; 