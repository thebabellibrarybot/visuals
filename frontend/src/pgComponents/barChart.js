import { useEffect, useState } from "react";
import { getNumTombsByValue } from "../api/commonAPI";
import ChartII from './chartII';
import MySVG from '../svg/mySVG';


const BarChart = (props) => {

    const version = props.props;
    const search = props.search;
    const [data, setData] = useState(null);

    console.log(version, 'v', search, 's')
 
    // impiment axios req to get barchart data based on props
    useEffect(() => {
        async function fetchData() {
            try {
                
                const response = await getNumTombsByValue(search, version);
                setData(response)

            } catch (err) {
                console.log('err', err)
            }
        }
        fetchData();
    }, [version, search])

    if (!data) {
        return (
            <div className="loader">
                <MySVG></MySVG>
            </div>
        )
    }

    return (
        <div className="svg-option">
            {data ? <ChartII data = {data}></ChartII> : <p>awaiting chartII props</p>}
        </div>
    )
}
export default BarChart;