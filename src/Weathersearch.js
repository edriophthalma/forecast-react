import React from "react";
import ForecastDate from "./ForecastDate";
import Weather from "./Weather";
import TempConversion from "./TempConversion";
export default function Weathersearch(props) {
    return (
       <div className="weathersearch">
           
 <div className="row">
     <div className="col-3">
     <ul>
    <li><Weather defaultCity={props.data.name}/></li>
    <li><ForecastDate date={props.data.date} /></li>
    <li><img src={props.data.icon} alt="icon" /></li>
    <li className="text-capitalize">{props.data.description}</li>
</ul></div>    
     <div className="col-9">
    <ul>
     <li><TempConversion celsius={props.data.temperature} /></li>
    <li>Humidity: {props.data.humidity}%</li>
    <li>Windspeed: {props.data.windspeed} Kn</li>
    </ul></div> 
</div>
    </div>   ); 
      
}