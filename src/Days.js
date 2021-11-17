import React from "react";
import Icon from "./Icon";
import "./Days";


export default function Days(props) {

    function MaxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}º`;
    }
    function MinTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}º`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];

    }

    return (<div>
                 <ul className="Days">
                    <li>{day()}</li>
                    <li><strong>{MaxTemp()}</strong>{MinTemp()}</li>
                     <li><Icon code={props.data.weather[0].icon} size={50}/></li>
                    
                    </ul>
                    
                    </div>);
}