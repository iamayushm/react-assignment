import React from "react";
import "./css/button.css"

interface ButtonProps{
    label: string,
    value: string,
    onClick: any
}

function Button({
    label,
    value,
    onClick
  } : ButtonProps){
    return (
        <button className="button_css" value={value} onClick={onClick}> {label} </button>
    );
}

export default Button;