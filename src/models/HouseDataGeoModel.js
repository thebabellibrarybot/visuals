const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const geoDataSchema = new Schema({
    street: {type: String, required: false},
    imgage_id: {type: String, required: false},
    citi: {type: String, required: false},
    n_citi: {type: String, required: false},
    bed: {type: String, required: false},
    bath: {type: String, required: false},
    price: {type: String, required: false},
    price_sqft: {type: String, required: false},
    counts_locations: {type: String, required: false},
    average_price_price_spft: {type: String, required: false},
    latitude:{type: String, required: false},
    longitude:{type: String, required: false}
  });

  const GeoModel = mongoose.model('houselotsiis', geoDataSchema);

  module.exports= GeoModel;