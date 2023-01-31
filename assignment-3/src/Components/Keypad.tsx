import React, { useState } from "react";
import Button from "./Button";
import "./css/keypad.css";

function Keypad(props: any) {
  let [expression, setExpression] = useState<string>("");
  let [result, setResult] = useState<string>("");

  const OnClick = (event: any) => {
    let value = event.target.value;

    if (value === "clr") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        result = eval(expression);
        setResult(result);
      } catch {
        window.alert("please enter a valid expression");
      }
    } else {
      expression = expression + value;
      setExpression(expression);
    }
  };

  return (
    <>
      <center>
        <td>
          <tr>
            <div className="input"> {expression} </div>
            <div className="output"> {result} </div>
          </tr>
          <tr>
            <Button label="1" value="1" onClick={OnClick} />
            <Button label="2" value="2" onClick={OnClick} />
            <Button label="3" value="3" onClick={OnClick} />
            <Button label="clr" value="clr" onClick={OnClick} />
          </tr>

          <tr>
            <Button label="4" value="4" onClick={OnClick} />
            <Button label="5" value="5" onClick={OnClick} />
            <Button label="6" value="6" onClick={OnClick} />
            <Button label="=" value="=" onClick={OnClick} />
          </tr>

          <tr>
            <Button label="7" value="7" onClick={OnClick} />
            <Button label="8" value="8" onClick={OnClick} />
            <Button label="9" value="9" onClick={OnClick} />
            <Button label="0" value="0" onClick={OnClick} />
          </tr>

          <tr>
            <Button label="+" value="+" onClick={OnClick} />
            <Button label="-" value="-" onClick={OnClick} />
            <Button label="*" value="*" onClick={OnClick} />
            <Button label="/" value="/" onClick={OnClick} />
          </tr>
        </td>
      </center>
    </>
  );
}

export default Keypad;
