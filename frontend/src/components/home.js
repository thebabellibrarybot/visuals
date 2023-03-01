import React from 'react';
import { Link } from 'react-router-dom'; 

class Home extends React.Component {
  render() {
    return (
      <div className='base'>

        <div className='home-option'>
          <Link className='link' to="/barchart" >Bar Chart</Link>
          <p>bar chart of data scrapped from libraries</p>
        </div>

        <div className='home-option'>
          <Link className='link' to="/basictable">Basic Table</Link>
          <p>basic table of data scrapped from so cal's housing market</p>
        </div>

        <div className='home-option'>
          <Link className='link' to="/geomap">Geo Map</Link>
          <p>basic geoMap of data scrapped from so cal's housing market</p>
        </div>
  
       </div>
    );
  };
};

export default Home;