import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { json } from 'd3'
import GeoMap from '../pgComponents/geoMap';
import MySVG from '../svg/mySVG';

function ViewSelected() {
  const location = useLocation();
  const data = location.state;
  
  // used to render a smaller geoMap if looking at housing data
  const myUrl = "https://raw.githubusercontent.com/thebabellibrarybot/caseStudy/main/California_County_Boundaries.geojson";
  const dataArray = Array.isArray(data) ? data : [data];
  const points = dataArray.map(item => item.d);
  const [mapData, setMapData] = useState();

  useEffect(() => {
    json(myUrl).then(setMapData)
    },[])

  if (!mapData) {
    return (
        <MySVG/>
    )
}

return (
    <div className='view-obj'>
        {data[0].d.street ? <h2 style={{ fontSize: "xx-large" }}>selected housing lots</h2> : <h2 style={{ fontSize: "xx-large" }}>selected manuscripts</h2>}
        <div className='grid'>
            {dataArray.map((obj, index) => {

                const title = obj.d.street || obj.d.value;
                const price = obj.d.price || obj.d.num;

                const titleEl = obj.d.street ? 'addy' : 'location';
                const priceEl = obj.d.price ? 'price' : 'numtomsb';
                const startlocation = [obj.d.longitude, obj.d.latitude]

                return (
                <div className = 'viewer' key={index}>
                    <h1>{titleEl}: {title} </h1>
                    <h2>{priceEl}: {price}</h2>
                    {obj.d.street ? <p>beds: {obj.d.bed}</p> : null}
                    {obj.d.street ? <p>baths: {obj.d.bath}</p> : null}
                    {obj.d.street ? <p>price per sqft: {obj.d.price_sqft}</p> : null}
                    {obj.d.street ? <GeoMap props = {mapData} marks = {points} hw = {[100,150]} startpoint = {startlocation} scale = {8040}/> : null}
                </div>
                )
            })}
        </div>
    </div>
    );
}
export default ViewSelected;