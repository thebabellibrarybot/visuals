import GeoMap from '../pgComponents/geoMap';
import { json } from 'd3'
import { useEffect, useState } from 'react';
const url = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";


const GeoMapOptions = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        json(url).then(setData)
    },[])

    if (!data) {
        return (
            <p>oops</p>
        )
    }

    return (
        <div>
            <GeoMap props = {data}/>
        </div>
    )
}
export default GeoMapOptions;