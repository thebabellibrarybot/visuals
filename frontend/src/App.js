import React from 'react'
import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';

import Home from './components/home';
import HousingChart from './components/basicTableOptions';
import BarChartOptions from './components/barChartOptions';
import GeoMapOptions from './components/geoMapOptions';

import './styles/components.css';
import './styles/pgcomponents.css';

function App() {

  return (
      <div className='app'>
        <div className='content'>
        <Router>
          
          <Routes>
            <Route path = "/" element = {<Home/>}/>
          </Routes>

          <Routes>
            <Route path = "/basictable" element = {<HousingChart/>}/>
          </Routes>

          <Routes>
            <Route path = "/barchart" element = {<BarChartOptions/>}/>
          </Routes>

          <Routes>
            <Route path = "/geomap" element = {<GeoMapOptions/>}/>
          </Routes>

          </Router>
        </div>
      </div>
    );
}

export default App;