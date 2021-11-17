import React from "react";
import ForecastDate from "./ForecastDate";
import Weather from "./Weather";
import TempConversion from "./TempConversion";
import Icon from "./Icon";
import "./Weathersearch.css";
export default function Weathersearch(props) {
    return (
       <div className="weathersearch">
           
 <div className="row">
     <div className="col-6">
     <ul>
    <li><Weather defaultCity={props.data.name}/></li>
    <li className="date"><ForecastDate date={props.data.date} /></li>
    <li className="date"><Icon code={props.data.icon} size={50} /></li>
    <li className="text-capitalize date">{props.data.description}</li>
</ul></div>    
     <div className="col-6">
    <ul>
     <li className="tempconversion"><TempConversion celsius={props.data.temperature} /></li>
    <li className="date">Humidity: {props.data.humidity}%</li>
    <li className="date">Windspeed: {props.data.windspeed} Kn</li>
    </ul></div> 
</div>
    </div>   ); 
      
}