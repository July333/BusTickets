import React, { useState } from 'react';

function Form(props) {
    //props.changeNum(1);
    const [numnew, setNumnew] = useState(props.num);

    const onNumChange = () => props.changeNum(numnew);

    return (
        <div className="form-group">
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={(e) => { setNumnew(e.target.value) }} value={numnew}></input>
                <button className="btn btn-primary" onClick={onNumChange}>Set num</button>
            </div>
        </div>
    )
}

export default Form;
