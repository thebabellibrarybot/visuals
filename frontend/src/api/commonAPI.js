import axios from 'axios';
import { stringMap } from './stingMap';

// get numTombs from MongoDB set by props
// returns res.data
export const getNumTombsByValue = async (year, value) => {

  const yearValue = stringMap[year]

  const headers = {
    year: yearValue,
    value: value,
  };
  const response = await axios.get('/searchmorgan/numtombs', { headers });
  return response.data;
};

// UNAVAILABLE REQ RN
export const updateData = async (year, value) => {
  const headers = {
    year: year,
    value: value
  }
  const response = await axios.get('http://localhost:4000/updatesearch/year', { headers });
  return response.data;
};

// get all housing data
export const findHousingData = async (year, value) => {
  const response = await axios.get('/getHouseData')
  return response.data;
}

// get all housing geodata
export const findHousingGeoData = async (year, value) => {
  const response = await axios.get('/getHouseData/geo')
  return response.data;
}