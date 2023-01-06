import React, { useState } from 'react'


export default function TextForm(props) {
    const hendleUpClick = ()=>{
        console.log("clickd");
    }
    const handleOnChange = ()=>{
        console.log("on change")
    }

    const [text, setText] = useState('Enter text hear');
    // text = "new text"; wrong way to cheng the state
    // setText("new text"); cureect way to cheng the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="5"></textarea>
            </div>
            <div className="btn btn-primary" onClick={hendleUpClick}>Convert to Uppeercase</div>
        </div>
    )
}
