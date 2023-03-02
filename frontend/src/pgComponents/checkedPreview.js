import { useNavigate } from 'react-router-dom';

const CheckedPreview = (props) => {

    const data = props.props;
    const navigate = useNavigate();

    function handleClick() {

        navigate('/viewselected', { state: data });
    }

    if (data !== 'nada') {
        return (
            <div className = 'checked-preview'>
                <h1>selected values</h1>
                {data.map((d, i) => {
                    console.log(d)
                    return (
                        <p className = 'selected-previewers' key = {i}>{d.street}</p>
                    )
                })}
                <button onClick={handleClick}>view selected</button>
            </div>
        )
    };
};
export default CheckedPreview