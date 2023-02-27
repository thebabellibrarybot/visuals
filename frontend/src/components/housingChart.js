import { useState } from "react";
import BasicTable from "../pgComponents/basicTable";
import { findHousingData } from '../api/commonAPI';

const HousingChart = () => {

    const [data, setData] = useState(null);
    

    // impiment axios req to get barchart data based on props
    async function fetchData() {
        try {
            const response = await findHousingData();
            setData(response)

        } catch (err) {
            console.log('err', err)
        }
    }
    fetchData();
    
    if (!data) {
        return (
            <p>loading</p>
        )
    }
    return (
        <div>
            <div>
                <BasicTable data = {data}/>
            </div>
        </div>
    )
}
export default HousingChart;