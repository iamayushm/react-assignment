import React, { useState } from "react"

import "./css/toggle.css"

export function ToggleCss(){

    let [toggle, setToggle] = useState<boolean>(false);

    function onclick(){
        setToggle(!toggle)
    }

    return (
        <div className={toggle? "input" : "input2" }>
            <p> Apply CSS styling in react component</p>
            <h4>
                Welcome to TQPP
            </h4>
            <h4>
                Hello React
            </h4>

            <div>
                <button onClick={onclick}> Toggle Css</button>
            </div>
        </div>
    )
}