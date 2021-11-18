import React, { useState, useEffect } from "react";
import axios from "axios";
import Days from "./Days";
import "./TableForecast.css";




export default function TableForecast(props) {
    const [loaded, goLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect (() => {
      goLoaded(false);} , [props.coordinates]);
    

 function DailyForecast(response){
 setForecast(response.data.daily); 
 goLoaded(true);
}
function load() {
    let apiKey = "2d50c0d7967e795bde908aa93c3e908d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DailyForecast);
}

    if(loaded) {
       return (
           <div className="row">
  {forecast.map(function(dailyForecast, index) { if (index >= 1 && index <= 5) {
                    return (<div className="col" key={index}><Days data={dailyForecast} />
               </div>);}}
   )} </div>)
       
       
              
                }
       
 else 
    
    load(); {
    return null}
   
}