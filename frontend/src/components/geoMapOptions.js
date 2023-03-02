import GeoMap from '../pgComponents/geoMap';
import { json } from 'd3'
import { useEffect, useState } from 'react';
import MySVG from '../svg/mySVG';
import { findHousingGeoData } from '../api/commonAPI';

const myUrl = "https://raw.githubusercontent.com/thebabellibrarybot/caseStudy/main/California_County_Boundaries.geojson";
//const marksUrl = [{long:-115.972754,lat:33.27214, name:"1317 Van Buren Avenue, Salton City, CA", price:201900, average_price_price_spft:152, n_citi:317, counts_locations:2},{long:-115.541117,lat:32.981883, name:"124 C Street W, Brawley, CA", price:228500, average_price_price_spft:277, n_citi:48, counts_locations:5},{long:-115.5614355,lat:32.8198452, name:"2304 Clark Road, Imperial, CA", price:273950, average_price_price_spft:342, n_citi:152, counts_locations:1},{long:-115.543296,lat:32.971534, name:"755 Brawley Avenue, Brawley, CA", price:350000, average_price_price_spft:277, n_citi:48, counts_locations:5},{long:-115.4801696,lat:32.6919763, name:"2207 R Carrillo Court, Calexico, CA", price:385100, average_price_price_spft:151, n_citi:55, counts_locations:2},{long:-115.543296,lat:32.971534, name:"755 Brawley Avenue, Brawley, CA", price:350000, average_price_price_spft:277, n_citi:48, counts_locations:5},{long:-115.482385,lat:32.681839, name:"1100 CAMILIA Street, Calexico, CA", price:415000, average_price_price_spft:151, n_citi:55, counts_locations:2},{long:-115.554027,lat:32.9652367, name:"803 Chaparral Court, Brawley, CA", price:545000, average_price_price_spft:277, n_citi:48, counts_locations:5},{long:-115.554027,lat:32.9652367, name:"803 Chaparral Court, Brawley, CA", price:545000, average_price_price_spft:277, n_citi:48, counts_locations:5},{long:-115.994405,lat:33.295432, name:"2306 Lark Court, Salton City, CA", price:690000, average_price_price_spft:152, n_citi:317, counts_locations:2},{long:-118.813823,lat:34.7839814, name:"38833 Gorman Post Road, Gorman, CA", price:1350000, average_price_price_spft:231, n_citi:129, counts_locations:3}];
//console.log(marksUrl.length, 'length')

const GeoMapOptions = () => {

    const [data, setData] = useState(null);
    const [dataII, setDataII] = useState(null);

    // ** notice styles componentat bottom 
    const noticeStyles = {
        color: 'rgb(255, 102, 102)'
    }

    useEffect(() => {
        json(myUrl).then(setData)
        findHousingGeoData().then(setDataII);
    },[])


    if (!data) {
        return (
            <MySVG/>
        )
    }

    return (
        <div className= 'base'>
            <div>
                <h1>Map of Housing Data in So Cal</h1>
                <GeoMap props = {data} marks = {dataII}/> 
                <p style = {noticeStyles}>*Note: i used a free api to get the long, lat from street addys. <br/>as a result I was only able to make the req a limited number of times</p> 
            </div>
       </div>
    )
}
export default GeoMapOptions;