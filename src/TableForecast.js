import React, { useState } from "react";
import axios from "axios";
import Days from "./Days";



export default function TableForecast(props) {
    const [loaded, goLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
 function DailyForecast(response){
 setForecast(response.data.daily); 
 goLoaded(true);
}

    if(loaded) {
       
       
       
        return (
            <table><tbody><tr>
                <td><Days data={forecast[1]}/></td>
      <td> <Days data={forecast[2]}/></td>
      <td><Days data={forecast[3]}/></td>
       <td><Days data={forecast[4]}/></td>
       <td><Days data={forecast[5]}/></td>
       </tr></tbody></table>) }
 else { 
    let apiKey = "2d50c0d7967e795bde908aa93c3e908d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DailyForecast);
    
    return null}
   
}