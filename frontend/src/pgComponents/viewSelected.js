import { useLocation } from 'react-router-dom';

function ViewSelected() {
  const location = useLocation();
  const data = location.state;

  const dataArray = Array.isArray(data) ? data : [data];

return (
    <div className='view-obj'>
        <div className='grid'>
            {dataArray.map((obj, index) => {

                console.log(obj.d.value, 'obj from viewselected')

                const title = obj.d.street || obj.d.value;
                const price = obj.d.price || obj.d.num;

                const titleEl = obj.d.street ? 'addy' : 'location';
                const priceEl = obj.d.price ? 'price' : 'numtomsb';

                return (
                <div className = 'viewer' key={index}>
                    <h1>{titleEl}: {title} </h1>
                    <h2>{priceEl}: {price}</h2>
                </div>
                )
            })}
        </div>
    </div>
    );
}
export default ViewSelected;