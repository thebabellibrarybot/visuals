import { useLocation } from 'react-router-dom';

function ViewSelected() {
  const location = useLocation();
  const data = location.state;

  const dataArray = Array.isArray(data) ? data.slice(1) : [data];

return (
    <div className='view-obj'>
        <div className='grid'>
            {dataArray.map((obj, index) => (
                <div className = 'viewer' key={index}>
                    <h1>addy: <br/> {obj.street} <br/> {obj.city}</h1>
                    <h2>price: {obj.price}</h2>
                </div>
            ))}
        </div>
    </div>
    );
}
export default ViewSelected;