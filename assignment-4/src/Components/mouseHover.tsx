import { useState } from "react";


export const MouseHover = () => {

    let [toggle, setToggle] = useState<boolean>(false)

    function onMouseEnter(){
        setToggle(true)
    }

    function onMouseLeave(){
        setToggle(false)
    }

    const MouseInside = {
        width: '300px',
        height: '100px',
        margin: 'auto',
        background: "#509de6"
    }

    const MouseOutside = {
        width:'300px',
        height: '100px',
        margin: 'auto',
        background: "#f5d992"
    }

    return (
      <div >
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={toggle ? MouseInside : MouseOutside}>Hello React.</div>
      </div>
    );
};

