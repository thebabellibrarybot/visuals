import React from 'react';
import { Link } from 'react-router-dom'; 

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/chart" >Housing Chart</Link>
        <br></br>
        <Link to="/custom">Custom Graphs</Link>
        <br></br>
        <Link to="/geomap">geo map</Link>
      </div>
    );
  }
}

export default Home;