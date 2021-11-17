import React, { useState } from "react";
import "./TempConversion.css";
export default function TempConversion(props) {
    const [unit, setUnit] = useState("celsius");
    function convertF(event) {
        event.preventDefault();
        setUnit("fahrenheit");

    }
    function convertC(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {

    
    return(
        <div className="temperature">
        <span>
        <strong>{Math.round(props.celsius)}</strong></span><span>ºC|º<a href="/" onClick={convertF}>F</a>
     </span>
        </div>
    );}
    else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
         <div className="temperature">
             
        <span className="TempConversion">
            <strong>{Math.round(fahrenheit)}</strong></span>
        
        |ºF<span> <a href="/" onClick={convertC}>ºC</a></span>
        </div>  
        );
    }
}