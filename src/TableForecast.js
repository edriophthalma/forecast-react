import React, { useState } from "react";
import axios from "axios";
import Days from "./Days";
import "./TableForecast.css";




export default function TableForecast(props) {
    const [loaded, goLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
 function DailyForecast(response){
 setForecast(response.data.daily); 
 goLoaded(true);
}

    if(loaded) {
       
       
       
        return (<div className="table">
            <table className="TableForecast">
     <td className="col-2"><Days data={forecast[1]}/></td>
      <td className="col-2"> <Days data={forecast[2]}/></td>
      <td className="col-2"><Days data={forecast[3]}/></td>
       <td className="col-2"><Days data={forecast[4]}/></td>
       <td className="col-2"><Days data={forecast[5]}/></td>
       <td className="col-2"><Days data={forecast[6]}/></td>
       </table></div>); }
 else { 
    let apiKey = "2d50c0d7967e795bde908aa93c3e908d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DailyForecast);
    
    return null}
   
}