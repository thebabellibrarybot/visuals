import { useNavigate } from 'react-router-dom';

const CheckedPreview = (props) => {

    const datainital = props.props;
    const data = datainital.slice(1)
    const navigate = useNavigate();
    console.log(data, 'data from checked Preview')

    function handleClick() {

        navigate('/viewselected', { state: data });

    }

    if (data !== 'nada') {
        return (
            <div className = 'checked-preview'>
                <h1>selected values</h1>
                {data.map((d, i) => {
                    return (
                        <div className='ah'>
                            <p className = 'selected-previewers' key = {i}>{d.d.street? d.d.street : d.d.value}</p>
                        </div>
                    )
                })}
                <button onClick={handleClick}>view selected</button>
            </div>
        )
    };
};
export default CheckedPreview