import GeoMap from '../pgComponents/geoMap';
import { json } from 'd3'
import { useEffect, useState } from 'react';
import MySVG from '../svg/mySVG';
import { findHousingGeoData } from '../api/commonAPI';

const myUrl = "https://raw.githubusercontent.com/thebabellibrarybot/caseStudy/main/California_County_Boundaries.geojson";
const startlocation = [-115.972754, 33.27214];

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
                <GeoMap props = {data} marks = {dataII} hw = {[400,600]} startpoint = {startlocation} scale = {4080} viewer = {true}/> 
                <p style = {noticeStyles}>*Note: i used a free api to get the long, lat from street addys. <br/>as a result I was only able to make the req a limited number of times</p> 
            </div>
       </div>
    )
}
export default GeoMapOptions;