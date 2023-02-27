import React from 'react';
import { Link } from 'react-router-dom'; 

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/chart" >Housing Chart</Link>
        <Link to="/custom">Custom Graphs</Link>
      </div>
    );
  }
}

export default Home;