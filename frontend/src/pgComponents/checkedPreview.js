const CheckedPreview = (props) => {

    console.log(props, 'props') 
    const data = props.props;
    console.log(data)

    if (data !== 'nada') {
        console.log('got it')
        return (
            <div>
                <h1>selected values</h1>
                {data.map((d, i) => {
                    console.log(d)
                    return (
                        <p key = {i}>{d.street}</p>
                    )
                })}
            </div>
        )
    }

}
export default CheckedPreview