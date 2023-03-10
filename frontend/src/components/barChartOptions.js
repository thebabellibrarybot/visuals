import React, { useState } from 'react';
import BarChart from '../pgComponents/barChart';

const BarChartOptions = () => {

    // state
    const [type, setType] = useState(null);
    const [location, setLocation] = useState(null)
    const [searchValue, setSearchValue] = useState('nada');
    const yearArray = [ "5th century", "6th century", "7th century", "8th century", "9th century","10th century","11th century","12th century","13th century","14th century","15th century","16th century","17th century","18th century","19th century","20th century"]

    // get data on props-clicked
    function onClickProps(props) {
        if (props === 'type') {
            setType(true)
            setLocation(false)
        }
        if (props === 'location') {
            setLocation(true)
            setType(false)
        }
    }
    function handleChange (event) {
        setSearchValue(event.target.value)
    }

    return (
        <div className='base'> 
        <div className='barchart-options'>
            <h1>barchart of data scrapped from the morgan library</h1>
            <div className='svg-option'>
                <button label = 'type' onClick={() => onClickProps('type')}>show type</button>
                <button label = 'location' onClick={() => onClickProps('location')}>show location</button>
                <form className='svg-option'>
                    <select value = {searchValue} onChange={handleChange}>
                        <option value="">Select an option</option>
                            {yearArray.map((year, i) => {
                                return (
                                    <option value = {year} onChange={handleChange} key = {i}>{year}</option>
                                )
                            })}
                    </select>
                </form>
            </div>
            <div className='svg-option'>
                {type ? <BarChart props = 'type' search = {searchValue} /> : null}
                {location ? <BarChart props = 'location' search = {searchValue} /> : null}
            </div>
        </div>
        </div>
    );
};

export default BarChartOptions;